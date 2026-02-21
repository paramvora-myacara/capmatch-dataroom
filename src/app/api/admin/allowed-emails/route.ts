import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSession, COOKIE_NAME } from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

async function getAdminSession(): Promise<{ email: string; role: 'admin' } | null> {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  if (!value) return null;
  const session = decodeSession(value);
  if (!session || session.role !== 'admin') return null;
  return { email: session.email, role: 'admin' };
}

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from('dataroom_allowed_emails')
    .select('email')
    .order('email');

  if (error) {
    console.error('[admin allowed-emails]', error);
    return NextResponse.json(
      { error: 'Failed to load allowed emails' },
      { status: 500 }
    );
  }

  const emails = (data ?? []).map((r) => r.email);
  return NextResponse.json({ emails });
}

export async function POST(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === 'string' ? body.email : '';
  const normalized = normalizeEmail(email);

  if (!normalized) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  const supabase = createServiceRoleClient();
  const { error } = await supabase
    .from('dataroom_allowed_emails')
    .insert({ email: normalized });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'This email is already in the list' },
        { status: 400 }
      );
    }
    console.error('[admin allowed-emails POST]', error);
    return NextResponse.json(
      { error: 'Failed to add email' },
      { status: 500 }
    );
  }

  return NextResponse.json({ email: normalized }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const email = request.nextUrl.searchParams.get('email');
  const normalized = email ? normalizeEmail(email) : '';

  if (!normalized) {
    return NextResponse.json(
      { error: 'Email query parameter is required' },
      { status: 400 }
    );
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from('dataroom_allowed_emails')
    .delete()
    .eq('email', normalized)
    .select('email');

  if (error) {
    console.error('[admin allowed-emails DELETE]', error);
    return NextResponse.json(
      { error: 'Failed to remove email' },
      { status: 500 }
    );
  }

  if (!data || data.length === 0) {
    return NextResponse.json(
      { error: 'Email not found in list' },
      { status: 404 }
    );
  }

  return new NextResponse(null, { status: 204 });
}
