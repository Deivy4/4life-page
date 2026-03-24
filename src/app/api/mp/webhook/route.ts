export const dynamic = "force-dynamic"

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
    async (pedido) => {
      console.log("Procesando pedido:", pedido);
      
      // Enviar notificación al admin
      const notificacion = new BrevoEmailNotificationService();
      await notificacion.sendMessage({
        type: "NEW_PAYMENT",
        message: `
        Se ha recibido un nuevo pago a través de MercadoPago:
        nombre de persona que paga: ${pedido.nombre},
        telefono: ${pedido.telefono},
        email: ${pedido.email},
        ciudad: ${pedido.ciudad},
        direccion: ${pedido.direccion},
        producto comprado: ${pedido.product_id} - ${pedido.product_name},
        total pagado: ${pedido.total_pagado},
        estado del pedido: ${pedido.estado}
        `, subject: "💳 Nuevo pago recibido"});
      
      // Enviar confirmación al cliente solo si el pago fue aprobado
      if (pedido.estado === "aprobado") {
        await notificacion.sendConfirmacionCliente({
          nombre: pedido.nombre,
          email: pedido.email,
          telefono: pedido.telefono,
          ciudad: pedido.ciudad,
          direccion: pedido.direccion,
          producto: pedido.product_name,
          total: pedido.total_pagado
        });
      }
    }
  )

  await useCase.execute(paymentId)

  return new Response("ok")
}
