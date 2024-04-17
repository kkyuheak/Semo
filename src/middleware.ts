import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.JWT_SECRET });
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/login") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname.startsWith("/register") && session) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
