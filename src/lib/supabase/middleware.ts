import { NextResponse, type NextRequest } from 'next/server';
import { decodeSession, COOKIE_NAME } from '@/lib/dataroom-session-edge';

export async function updateSession(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isLoginPage = path === '/login';
  const isApiRoute = path.startsWith('/api/');
  const isAdminRoute = path === '/admin' || path.startsWith('/admin/');
  const isStaticAsset = /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff2?|ttf|mp4|webp)$/i.test(
    path
  );

  if (isStaticAsset) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(COOKIE_NAME)?.value;
  const session = cookieValue ? await decodeSession(cookieValue) : null;

  // API routes: never redirect; let route handlers return 401/403
  if (isApiRoute) {
    return NextResponse.next();
  }

  // Login page: allow unauthenticated; if already logged in, redirect to home or admin
  if (isLoginPage) {
    if (session) {
      const redirectUrl = session.role === 'admin' ? '/admin' : '/';
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
    return NextResponse.next();
  }

  // Admin page without admin session -> redirect to login
  if (isAdminRoute && (!session || session.role !== 'admin')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  // Protected (dataroom) routes without any valid session -> redirect to login
  if (!session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
