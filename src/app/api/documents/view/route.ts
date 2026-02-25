import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSessionFromValue, COOKIE_NAME } from '@/lib/dataroom-session';
import { createServiceRoleClient } from '@/lib/supabase/service-role-server';

const BUCKET = 'dataroom-documents';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const value = cookieStore.get(COOKIE_NAME)?.value;
  const session = getSessionFromValue(value);

  if (!session?.email) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const path = request.nextUrl.searchParams.get('path');
  if (!path) {
    return new NextResponse('path is required', { status: 400 });
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase.storage.from(BUCKET).download(path);

  if (error || !data) {
    return new NextResponse('File not found', { status: 404 });
  }

  const ext = path.split('.').pop()?.toLowerCase();
  const contentType =
    ext === 'pdf' ? 'application/pdf' :
    ext === 'xlsx' ? 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' :
    ext === 'xls' ? 'application/vnd.ms-excel' :
    'application/octet-stream';

  const arrayBuffer = await data.arrayBuffer();

  return new NextResponse(arrayBuffer, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': 'inline',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-store, no-cache, must-revalidate, private',
      'X-Frame-Options': 'SAMEORIGIN',
    },
  });
}
