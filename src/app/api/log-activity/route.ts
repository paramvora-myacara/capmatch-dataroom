import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSession, COOKIE_NAME } from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  const session = value ? decodeSession(value) : null;

  if (!session?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const { event_type, metadata = {} } = body as {
    event_type?: string;
    metadata?: Record<string, unknown>;
  };

  if (!event_type || !['signup', 'login', 'page_view'].includes(event_type)) {
    return NextResponse.json(
      { error: 'Invalid event_type' },
      { status: 400 }
    );
  }

  const supabase = createServiceRoleClient();
  const { error } = await supabase.from('activity_log').insert({
    user_id: null,
    email: session.email,
    event_type,
    metadata: { ...metadata, userAgent: request.headers.get('user-agent') ?? undefined },
  });

  if (error) {
    console.error('[log-activity]', error);
    return NextResponse.json({ error: 'Failed to log activity' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
