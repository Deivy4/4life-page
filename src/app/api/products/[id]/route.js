// app/api/products/[id]/route.js
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

export async function GET(req, { params }) {
  const accessToken = req.cookies.get("supabase_token")?.value;
  const refreshToken = req.cookies.get("supabase_refresh_token")?.value;
  const { id } = params; // id del producto a traer

  let tokenToUse = accessToken;

  // Renovar token si hace falta
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
  }

  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/products?id=eq.${id}`,
    {
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${tokenToUse}`,
        Prefer: "return=representation",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: response.status });
  }

  return NextResponse.json({ data: data[0] ?? null });
}

export async function DELETE(req, { params }) {
  const accessToken = req.cookies.get("supabase_token")?.value;
  const refreshToken = req.cookies.get("supabase_refresh_token")?.value;
  const { id } = params;

  let tokenToUse = accessToken;
  if (!tokenToUse && refreshToken) {
    const { data: refreshed } = await supabaseServer.auth.refreshSession({
      refresh_token: refreshToken,
    });
    tokenToUse = refreshed?.session.access_token;
  }

  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/products?id=eq.${id}`,
    {
      method: "DELETE",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${tokenToUse}`,
        Prefer: "return=representation",
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: response.status });
  }

  return NextResponse.json({ data: data[0] ?? null });
}

export async function PATCH(req, { params }) {
  const accessToken = req.cookies.get("supabase_token")?.value;
  const refreshToken = req.cookies.get("supabase_refresh_token")?.value;
  const { id } = params;

  let tokenToUse = accessToken;
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
    tokenToUse = refreshed?.session.access_token;
  }

  // Obtener body del request
  const body = await req.json();
  // Separar datos de productos y stock
  const { stock, ...productData } = body;

  // 1️⃣ Actualizar producto
  const productRes = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/products?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${tokenToUse}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(productData),
    }
  );

  if (!productRes.ok) {
    const err = await productRes.json();
    return NextResponse.json({ error: err }, { status: productRes.status });
  }
  // 2️⃣ Actualizar stock si viene
  if (stock) {
    await fetch(`${process.env.SUPABASE_URL}/rest/v1/stock?id=eq.${stock.id}`, {
      method: "PATCH",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${tokenToUse}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify(stock),
    });
  }

  return NextResponse.json({ data: body });
}
