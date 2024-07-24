// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/main', request.url));
  }
  return NextResponse.next();
}

// 이 설정을 추가하여 모든 경로에서 미들웨어가 실행되도록 합니다.
export const config = {
  matcher: '/',
};
