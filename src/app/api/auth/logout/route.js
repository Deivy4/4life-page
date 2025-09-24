import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
export async function POST(req) {
  const res = NextResponse.json({ message: "Logged out" });
  await supabaseServer.auth.signOut();
  // Borrar cookies
  res.cookies.set("supabase_token", "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0, // fuerza borrado
  });

  res.cookies.set("supabase_refresh_token", "", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return res;
}
