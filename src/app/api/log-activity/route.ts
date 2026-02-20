import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id || !user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { event_type, metadata = {} } = body as {
    event_type: 'signup' | 'login' | 'page_view';
    metadata?: Record<string, unknown>;
  };

  if (!event_type || !['signup', 'login', 'page_view'].includes(event_type)) {
    return NextResponse.json(
      { error: 'Invalid event_type' },
      { status: 400 }
    );
  }

  const { error } = await supabase.from('activity_log').insert({
    user_id: user.id,
    email: user.email,
    event_type,
    metadata: { ...metadata, userAgent: request.headers.get('user-agent') ?? undefined },
  });

  if (error) {
    console.error('[log-activity]', error);
    return NextResponse.json({ error: 'Failed to log activity' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
