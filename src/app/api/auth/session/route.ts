import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/auth/session';
import type { SessionData } from '@/lib/auth/session';

export async function GET(request: NextRequest) {
  const response = NextResponse.json({});
  const session = await getIronSession<SessionData>(request, response, sessionOptions);

  if (!session.isLoggedIn || !session.email) {
    return NextResponse.json({ user: null });
  }

  // Check if session expired
  if (session.expiresAt && Date.now() > session.expiresAt) {
    session.destroy();
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: { email: session.email } });
}
