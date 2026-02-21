import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSessionFromValue, COOKIE_NAME } from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

const BUCKET = 'dataroom-documents';

export async function GET() {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  const session = getSessionFromValue(value);

  if (!session?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .list('', { limit: 500, sortBy: { column: 'created_at', order: 'desc' } });

  if (error) {
    console.error('[api/documents]', error);
    return NextResponse.json(
      { error: 'Failed to list documents' },
      { status: 500 }
    );
  }

  const files = (data ?? []).filter((f) => f.name && !f.name.endsWith('/'));
  return NextResponse.json({ files });
}
