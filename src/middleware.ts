import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get('jwt')?.value;
  const { pathname } = request.nextUrl;

  const authPaths = ['/login', '/register'];

  const publicPaths = ['/dashboard', '/testing'];

  if (!jwt && !publicPaths.includes(pathname) && !authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (jwt && authPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.[^/]+$).*)",
  ],
};
