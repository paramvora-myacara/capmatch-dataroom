import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSessionFromValue, COOKIE_NAME } from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

const BUCKET = 'dataroom-documents';

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  const session = getSessionFromValue(value);

  if (!session?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const path = typeof body.path === 'string' ? body.path.trim() : '';
  if (!path) {
    return NextResponse.json(
      { error: 'path is required' },
      { status: 400 }
    );
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(path, 3600);

  if (error) {
    console.error('[api/documents/signed-url]', error);
    return NextResponse.json(
      { error: 'Failed to create signed URL' },
      { status: 500 }
    );
  }

  if (!data?.signedUrl) {
    return NextResponse.json(
      { error: 'Failed to create signed URL' },
      { status: 500 }
    );
  }

  return NextResponse.json({ url: data.signedUrl });
}
