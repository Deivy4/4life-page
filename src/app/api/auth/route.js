// /src/app/api/auth/route.js
import { supabaseServer } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("supabase_token")?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  const { data: user, error } = await supabaseServer.auth.getUser(token);

  if (error || !user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user });
}

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email y contraseña requeridos" },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseServer.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }

  const res = NextResponse.json({ user: data.user });
  res.cookies.set("supabase_token", data.session.access_token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: data.session.expires_in,
  });
  res.cookies.set("supabase_refresh_token", data.session.refresh_token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  return res;
}
