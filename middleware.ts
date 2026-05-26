import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // If in production AND the QA flag is not explicitly enabled
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_ENABLE_QA !== 'true') {
    // Block any route starting with /qa
    if (request.nextUrl.pathname.startsWith('/qa')) {
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/qa/:path*', '/internal/:path*'],
};
