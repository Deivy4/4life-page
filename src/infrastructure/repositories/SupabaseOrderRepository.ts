import { OrderRepository } from "@/domain/repositories/OrderRepository"
import { supabaseServer } from "@/lib/supabase/server"

export class SupabaseOrderRepository implements OrderRepository {
  async create(input: {
    mp_preference_id: string
    nombre: string
    telefono: string
    email: string
    ciudad: string
    direccion: string
    product_id: string
    total_pagado: number
  }): Promise<{
    id: string
    created_at: string
  }> {
    const { data, error } = await supabaseServer
      .from("pedidos")
      .insert({
        mp_preferencia_id: input.mp_preference_id,
        nombre: input.nombre,
        telefono: input.telefono,
        email: input.email,
        ciudad: input.ciudad,
        direccion: input.direccion,
        product_id: input.product_id,
        total_pagado: input.total_pagado,
      })
      .select("id, created_at")
      .single()

    if (error) {
      throw new Error(`Error creando pedido: ${error.message}`)
    }

    return data
  }

  async findByIdPreference(id: string): Promise<{
    id: string
    mp_preference_id: string
    email: string
    total_pagado: number,
    ciudad: string,
    direccion: string,
    product_id: string,
    telefono: string,
    nombre: string
  } | null> {
    const { data, error } = await supabaseServer
    .from("mp_preferencias")
    .select(`
      mp_preference_id,
      pedidos (
        id,
        email,
        total_pagado,
        ciudad,
        direccion,
        product_id,
        telefono,
        nombre
      )
    `)
    .eq("mp_preference_id", id)
    .maybeSingle()


    if (error) {
      throw new Error(`Error buscando pedido: ${error.message}`)
    }

    if (!data || !data.pedidos) return null

    const pedido = data.pedidos[0]

    return {
      id: pedido.id,
      mp_preference_id: data.mp_preference_id,
      email: pedido.email,
      total_pagado: pedido.total_pagado,
      ciudad: pedido.ciudad,
      direccion: pedido.direccion,
      product_id: pedido.product_id,
      telefono: pedido.telefono,
      nombre: pedido.nombre,
    }
  }

  async findByEmail(email: string): Promise<
    {
      id: string
      mp_preference_id: string
      product_id: string
      total_pagado: number
      created_at: string
    }[]
  > {
    const { data, error } = await supabaseServer
      .from("pedidos")
      .select(
        "id, mp_preferencia_id, product_id, total_pagado, created_at"
      )
      .eq("email", email)
      .order("created_at", { ascending: false })

    if (error) {
      throw new Error(`Error buscando pedidos por email: ${error.message}`)
    }

    return data.map(pedido => ({
      id: pedido.id,
      mp_preference_id: pedido.mp_preferencia_id,
      product_id: pedido.product_id,
      total_pagado: pedido.total_pagado,
      created_at: pedido.created_at,
    }))
  }
  async updatePedidoTotal(input: {
    id: string
    total_pagado: number
  }): Promise<void> {
    const { error } = await supabaseServer
      .from("pedidos")
      .update({
        total_pagado: input.total_pagado
      })
      .eq("id", input.id)

    if (error) {
      throw new Error(`Error actualizando pedido: ${error.message}`)
    }
  }

}
