import { NextResponse } from "next/server"

export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === "/login" 
  
  const token = request.cookies.get("token")?.value || ""

  // if(token && path ==='/'){
  //   return NextResponse.redirect(new URL('/home',request.nextUrl ))
  // }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/feed", request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/feed", "/login",'/feed/:path*']
}