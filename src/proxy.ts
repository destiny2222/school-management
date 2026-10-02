import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that do NOT require authentication
const PUBLIC_ROUTES = ["/auth/login"];

// Routes that require authentication
const PROTECTED_PREFIXES = [
  "/admin_portal",
  "/teacher_portal",
  "/student_portal",
  "/parents_portal",
  "/superadmin_portal",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read the auth token — stored in a cookie (preferred for middleware)
  // or fall back to checking a custom header set by the client
  const token =
    request.cookies.get("token")?.value ||
    request.headers.get("x-auth-token");

  const isAuthenticated = Boolean(token);
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route || pathname.startsWith(route + "/"));
  const isProtectedRoute = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  // 1. Unauthenticated user trying to access a protected route → send to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Already authenticated user visiting login page → send to home
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static  (static files)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - public folder assets (png, jpg, svg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js)$).*)",
  ],
};
