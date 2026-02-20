import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/auth/session';
import type { SessionData } from '@/lib/auth/session';

const PUBLIC_PATHS = ['/login', '/api/auth/login', '/api/auth/logout', '/api/auth/session'];
const STATIC_EXTENSIONS = /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff2?|ttf|mp4|webp)$/;

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Allow static assets (images, fonts, etc.)
  if (STATIC_EXTENSIONS.test(path)) {
    return NextResponse.next();
  }

  // Allow public paths
  if (PUBLIC_PATHS.some((p) => path === p || path.startsWith(p + '/'))) {
    // Redirect logged-in users away from login page
    if (path === '/login') {
      const response = NextResponse.next();
      const session = await getIronSession<SessionData>(request, response, sessionOptions);
      if (session.isLoggedIn && session.email) {
        return NextResponse.redirect(new URL('/', request.url));
      }
      return response;
    }
    return NextResponse.next();
  }

  const response = NextResponse.next();
  const session = await getIronSession<SessionData>(request, response, sessionOptions);

  const isValid =
    session.isLoggedIn &&
    session.email &&
    (!session.expiresAt || Date.now() < session.expiresAt);

  if (!isValid) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', path);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
