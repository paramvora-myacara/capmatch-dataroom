import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/auth/session';
import type { SessionData } from '@/lib/auth/session';
import { logAccess } from '@/lib/auth/access-log';

export async function POST(request: NextRequest) {
  const response = NextResponse.json({ ok: true });
  const session = await getIronSession<SessionData>(request, response, sessionOptions);

  if (!session.isLoggedIn || !session.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { page, action = 'view' } = body;

  if (page) {
    logAccess({
      email: session.email,
      page,
      action,
      userAgent: request.headers.get('user-agent') || undefined,
    });
  }

  return response;
}
