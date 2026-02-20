import { getIronSession } from 'iron-session';

export interface SessionData {
  email: string;
  isLoggedIn: boolean;
  expiresAt: number;
}

const SESSION_COOKIE_NAME = 'capmatch_dataroom_session';
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

const sessionOptions = {
  password: process.env.DATAROOM_SESSION_SECRET || 'fallback-secret-min-32-chars-long-change-in-prod',
  cookieName: SESSION_COOKIE_NAME,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    sameSite: 'lax' as const,
    path: '/',
  },
};

export { sessionOptions };

export function getAllowedEmails(): string[] {
  const emails = process.env.DATAROOM_ALLOWED_EMAILS || '';
  return emails
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isEmailAllowed(email: string): boolean {
  const allowed = getAllowedEmails();
  if (allowed.length === 0) {
    // If no allowlist configured, allow any email (dev mode)
    return true;
  }
  return allowed.includes(email.trim().toLowerCase());
}

export function verifyPassword(password: string): boolean {
  const configured = process.env.DATAROOM_PASSWORD || '';
  if (!configured) {
    return false;
  }
  return password === configured;
}

export async function getSession(request: Request, response: Response) {
  return getIronSession<SessionData>(request, response, sessionOptions);
}
