import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { isEmailAllowed, verifyPassword, sessionOptions } from '@/lib/auth/session';

const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password are required' },
      { status: 400 }
    );
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!isEmailAllowed(trimmedEmail)) {
    return NextResponse.json(
      { error: 'Access denied. Your email is not authorized to access this data room.' },
      { status: 403 }
    );
  }

  if (!verifyPassword(password)) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });
  const session = await getIronSession<{ email: string; isLoggedIn: boolean; expiresAt: number }>(
    request,
    response,
    sessionOptions
  );

  session.email = trimmedEmail;
  session.isLoggedIn = true;
  session.expiresAt = Date.now() + SESSION_MAX_AGE * 1000;
  await session.save();

  return response;
}
