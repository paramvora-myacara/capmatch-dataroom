/**
 * Edge-compatible session decode only (no Node crypto).
 * Use this in middleware; use dataroom-session.ts in API routes.
 */

const COOKIE_NAME = 'dataroom_session';

export type DataroomRole = 'viewer' | 'admin';

export type SessionPayload = {
  email: string;
  exp: number;
  role: DataroomRole;
};

function getSecret(): string {
  const secret =
    process.env.DATAROOM_SESSION_SECRET || process.env.DATAROOM_SHARED_PASSWORD;
  if (!secret) throw new Error('DATAROOM_SESSION_SECRET or DATAROOM_SHARED_PASSWORD required');
  return secret;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return out === 0;
}

async function verifySignature(payloadB64: string, signature: string): Promise<boolean> {
  const secret = getSecret();
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const payloadBytes = new TextEncoder().encode(payloadB64);
  const sigBuffer = await crypto.subtle.sign('HMAC', key, payloadBytes);
  const sigBytes = new Uint8Array(sigBuffer);
  const expected = btoa(String.fromCharCode(...sigBytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return constantTimeEqual(signature, expected);
}

export async function decodeSession(value: string): Promise<SessionPayload | null> {
  const dot = value.indexOf('.');
  if (dot === -1) return null;
  const payloadB64 = value.slice(0, dot);
  const signature = value.slice(dot + 1);
  if (!(await verifySignature(payloadB64, signature))) return null;
  try {
    const base64 = payloadB64.replace(/-/g, '+').replace(/_/g, '/');
    const pad = base64.length % 4;
    const padded = pad ? base64 + '='.repeat(4 - pad) : base64;
    const binary = atob(padded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const payloadStr = new TextDecoder().decode(bytes);
    const payload = JSON.parse(payloadStr) as SessionPayload;
    if (
      typeof payload.email !== 'string' ||
      typeof payload.exp !== 'number' ||
      (payload.role !== 'viewer' && payload.role !== 'admin')
    ) {
      return null;
    }
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
