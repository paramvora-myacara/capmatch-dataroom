import { NextRequest, NextResponse } from 'next/server';
import {
  encodeSession,
  COOKIE_NAME,
  getCookieOptions,
} from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

const GENERIC_ERROR = 'Invalid email or password';

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email : '';
    const password = typeof body.password === 'string' ? body.password : '';
    const redirectTo =
      typeof body.redirect === 'string' && body.redirect
        ? body.redirect
        : '/';

    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) {
      return NextResponse.json(
        { error: GENERIC_ERROR },
        { status: 401 }
      );
    }

    const adminEmail = process.env.DATAROOM_ADMIN_EMAIL?.trim().toLowerCase();
    const adminPassword = process.env.DATAROOM_ADMIN_PASSWORD;
    const sharedPassword = process.env.DATAROOM_SHARED_PASSWORD;

    if (!adminEmail || !adminPassword || !sharedPassword) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Admin path
    if (normalizedEmail === adminEmail && password === adminPassword) {
      const sessionValue = encodeSession(normalizedEmail, 'admin');
      const response = NextResponse.json({
        ok: true,
        redirect: '/admin',
      });
      response.cookies.set(COOKIE_NAME, sessionValue, getCookieOptions());
      return response;
    }

    // Viewer path: shared password + allowlist (Supabase)
    if (password !== sharedPassword) {
      return NextResponse.json(
        { error: GENERIC_ERROR },
        { status: 401 }
      );
    }

    const supabase = createServiceRoleClient();
    const { data: row, error } = await supabase
      .from('dataroom_allowed_emails')
      .select('email')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (error || !row) {
      return NextResponse.json(
        { error: GENERIC_ERROR },
        { status: 401 }
      );
    }

    const sessionValue = encodeSession(normalizedEmail, 'viewer');
    const response = NextResponse.json({
      ok: true,
      redirect: redirectTo.startsWith('/') ? redirectTo : '/',
    });
    response.cookies.set(COOKIE_NAME, sessionValue, getCookieOptions());
    return response;
  } catch {
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
