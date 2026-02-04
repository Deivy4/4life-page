import { OrderRepository } from "@/domain/repositories/OrderRepository"

export class CreateOrder {
  constructor(private repository: OrderRepository) {}

  async execute(input: {
    mp_preferencia_id: string
    customer: {
      nombre: string
      telefono: string
      email: string
      ciudad: string
      direccion: string
    }
    items: { idProduct: string; quantity?: number }[]
  }) {
    return this.repository.create({
      mp_preference_id: input.mp_preferencia_id,
      product_id: input.items[0].idProduct,
      total_pagado: 0, // se completa en webhook
      ...input.customer
    })
  }
}
