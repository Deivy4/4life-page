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
      await notificacion.sendMessage(`NOVEDAD DE PAGO:
        nombre de persona que paga: ${event.nombre},
        telefono: ${event.telefono},
        email: ${event.email},
        ciudad: ${event.ciudad},
        direccion: ${event.direccion},
        producto comprado (ID): ${event.product_id},
        total pagado: ${event.total_pagado}
        `);
    }
  )

  await useCase.execute(paymentId)

  return new Response("ok")
}
