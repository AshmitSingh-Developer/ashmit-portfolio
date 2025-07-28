// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login';
  const hasAuth = req.cookies.get('admin-auth')?.value === 'true';


  // ❌ Unauthenticated user trying to access protected admin pages
  if (isAdminRoute && !hasAuth && !isLoginPage) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  // ✅ Already authenticated user visiting login page — redirect to dashboard
  if (hasAuth && isLoginPage) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  return NextResponse.next();
}

// Match only admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
