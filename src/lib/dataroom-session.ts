import { createHmac, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'dataroom_session';
const EXPIRY_DAYS = 7;

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

function sign(payload: string): string {
  const secret = getSecret();
  return createHmac('sha256', secret).update(payload).digest('base64url');
}

function verify(payload: string, signature: string): boolean {
  const expected = sign(payload);
  if (expected.length !== signature.length) return false;
  return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

export function encodeSession(email: string, role: DataroomRole): string {
  const exp = Math.floor(Date.now() / 1000) + EXPIRY_DAYS * 24 * 60 * 60;
  const payload: SessionPayload = { email, exp, role };
  const payloadStr = JSON.stringify(payload);
  const payloadB64 = Buffer.from(payloadStr, 'utf8').toString('base64url');
  const signature = sign(payloadB64);
  return `${payloadB64}.${signature}`;
}

export function decodeSession(value: string): SessionPayload | null {
  const dot = value.indexOf('.');
  if (dot === -1) return null;
  const payloadB64 = value.slice(0, dot);
  const signature = value.slice(dot + 1);
  if (!verify(payloadB64, signature)) return null;
  try {
    const payloadStr = Buffer.from(payloadB64, 'base64url').toString('utf8');
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

export function getSessionFromCookie(cookieHeader: string | null): SessionPayload | null {
  if (!cookieHeader) return null;
  const cookies = cookieHeader.split(';').map((c) => c.trim());
  for (const c of cookies) {
    if (c.startsWith(`${COOKIE_NAME}=`)) {
      const value = c.slice(COOKIE_NAME.length + 1).trim();
      if (value) return decodeSession(value);
      return null;
    }
  }
  return null;
}

/** Use in API route handlers: pass the result of await cookies().get(COOKIE_NAME)?.value */
export function getSessionFromValue(value: string | undefined): SessionPayload | null {
  if (!value) return null;
  return decodeSession(value);
}

export function getCookieOptions(): { httpOnly: true; secure: boolean; sameSite: 'lax'; path: '/'; maxAge: number } {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: EXPIRY_DAYS * 24 * 60 * 60,
  };
}

export { COOKIE_NAME, EXPIRY_DAYS };
