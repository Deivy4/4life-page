import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
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
  console.log(tokenToUse);
  // Crear cliente Supabase con access token válido
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY,
    {
      global: {
        headers: {
          Authorization: `Bearer ${tokenToUse}`,
        },
      },
    }
  );

  const { data, error } = await supabase.from("products").select("*");
  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ data });
}
