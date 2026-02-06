export interface OrderRepository {
  create(input: {
    mp_preference_id: string

    // Datos del cliente
    nombre: string
    telefono: string
    email: string
    ciudad: string
    direccion: string

    // Pedido
    product_id: string
    total_pagado: number
  }): Promise<{
    id: string
    created_at: string
  }>

  findByIdPreference(id: string): Promise<{
    id: string
    mp_preference_id: string
    email: string
    total_pagado: number,
    ciudad: string,
    direccion: string,
    product_id: string,
    telefono: string,
    nombre: string,
    product_name?: string
  } | null>

  findByEmail(email: string): Promise<
    {
      id: string
      mp_preference_id: string
      product_id: string
      total_pagado: number
      created_at: string
    }[]
  >
  updatePedidoTotal(input: {
    id: string
    total_pagado: number
  }): Promise<void>
}
