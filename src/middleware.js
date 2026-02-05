import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/nuestra-vision", "/contacto"];

export function middleware(req) {
  const { pathname } = req.nextUrl;
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
    return NextResponse.next();
  }

  // ✅ Continuar normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
