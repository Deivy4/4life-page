import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET(req) {
  const accessToken = req.cookies.get("supabase_token")?.value;
  const refreshToken = req.cookies.get("supabase_refresh_token")?.value;

  let tokenToUse = accessToken;

  // Si no hay access token, usar refresh token para renovarlo
  if (!tokenToUse && refreshToken) {
    const { data: refreshed, error: refreshError } =
      await supabaseServer.auth.refreshSession({
        refresh_token: refreshToken,
      });

    if (refreshError) {
      return NextResponse.json(
        { error: "Token expirado, re-login requerido" },
        { status: 401 }
      );
    }

    tokenToUse = refreshed.session.access_token;

    // Actualizar cookies con nuevos tokens
    const res = NextResponse.next();
    res.cookies.set("supabase_token", refreshed.session.access_token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: refreshed.session.expires_in,
    });
    res.cookies.set("supabase_refresh_token", refreshed.session.refresh_token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 días
    });
  }

  // Si no hay token válido
  if (!tokenToUse) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }
  // Crear cliente Supabase con access token válido
  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/products?select=*,stock!left(*)`,
    {
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY, // service role key aquí
        Authorization: `Bearer ${tokenToUse}`,
        Prefer: "return=representation",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: res.status });
  }
  const productsWithStock = data.map((product) => ({
    ...product,
    stock: product.stock[0] || null,
  }));

  return NextResponse.json({ data: productsWithStock });
}
