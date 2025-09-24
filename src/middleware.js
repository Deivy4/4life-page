import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/login", "/", "/testimonios"];

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("supabase_token")?.value;
  console.log("token desde mid $$$$$$$$" + token);
  // ✅ Excluir APIs, assets, imágenes y favicon
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next/static") ||
    pathname.startsWith("/_next/image") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // ✅ Permitir acceso a rutas públicas
  if (PUBLIC_ROUTES.includes(pathname)) {
    console.log("🔑 Token:", token);
    if (pathname == "/login" && token) {
      const loginUrl = new URL("/", req.url);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  // 🔄 Si ya tiene token e intenta entrar a login -> home
  if (token && pathname === "/login") {
    const homeUrl = new URL("/", req.url);
    return NextResponse.redirect(homeUrl);
  }

  // ✅ Continuar normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
