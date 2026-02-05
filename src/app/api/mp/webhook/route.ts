import { NextRequest } from 'next/server'
import { SupabaseMPPreferenceRepository } from "@/infrastructure/repositories/SupabaseMPPreferenceRepository"
import { MercadoPagoPaymentServiceImpl } from "@/infrastructure/mercado-pago/MercadoPagoPaymentService"
import { HandleMercadoPagoPayment } from "@/application/use-cases/HandleMercadoPagoPayment"
import { BrevoEmailNotificationService } from '@/infrastructure/brevo/BrevoEmailService'

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log("webhook recibido", data)

  if (data.type !== "payment") {
    return new Response("ignored")
  }

  const paymentId = data.data.id

  const useCase = new HandleMercadoPagoPayment(
    new SupabaseMPPreferenceRepository(),
    new MercadoPagoPaymentServiceImpl(),
    async (event) => {
      let notificacion = new BrevoEmailNotificationService();
      await notificacion.sendMessage({
        type: "NEW_PAYMENT",
        message: `
        Se ha recibido un nuevo pago a través de MercadoPago:
        nombre de persona que paga: ${event.nombre},
        telefono: ${event.telefono},
        email: ${event.email},
        ciudad: ${event.ciudad},
        direccion: ${event.direccion},
        producto comprado: ${ event.product_id} - ${event.product_name},
        total pagado: ${event.total_pagado}
        `, subject: "💳 Nuevo pago recibido"});
    }
  )

  await useCase.execute(paymentId)

  return new Response("ok")
}
