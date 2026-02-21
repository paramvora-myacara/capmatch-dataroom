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

  const formData = await request.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: 'No file provided' },
      { status: 400 }
    );
  }

  const path = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const supabase = createServiceRoleClient();
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, buffer, {
      cacheControl: '3600',
      upsert: false,
      contentType: file.type || undefined,
    });

  if (error) {
    console.error('[api/documents/upload]', error);
    return NextResponse.json(
      { error: error.message || 'Upload failed' },
      { status: 500 }
    );
  }

  return NextResponse.json({ path, name: file.name });
}
