import { NextResponse } from "next/server";

export async function GET(req) {
  const tokenToUse = process.env.SUPABASE_ANON_KEY;
  // ⚠️ Usa SERVICE_KEY solo si es backend seguro, nunca en cliente.

  // Llamada al endpoint de Supabase
  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/products?select=*,stock!inner(*)&show_front_principal=eq.true`,
    {
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY, // o SERVICE_KEY
        Authorization: `Bearer ${tokenToUse}`,
        Prefer: "return=representation",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: response.status });
  }
  // Transformar para que `stock` no sea array sino objeto único
  const productsWithStock = data.map((product) => ({
    ...product,
    stock: product.stock[0] || null,
  }));

  return NextResponse.json(productsWithStock);
}
