import { MPPreferenceRepository } from "@/domain/repositories/MPPreferenceRepository"
import { MercadoPagoPaymentService } from "@/domain/payment/MercadoPagoPaymentService"
import { OrderRepository } from "@/domain/repositories/OrderRepository"
import { SupabaseOrderRepository } from "@/infrastructure/repositories/SupabaseOrderRepository"

export class HandleMercadoPagoPayment {
  private readonly orderRepository: OrderRepository
  constructor(
    private mpPreferenceRepo: MPPreferenceRepository,
    private mpService: MercadoPagoPaymentService,
    private onPaymentProcessed: (pedido: any) => Promise<void>
  ) {
    this.orderRepository = new SupabaseOrderRepository();
  }

  async execute(paymentId: string) {
    // 1️⃣ Traer pago real desde MP
    const payment = await this.mpService.getPaymentById(paymentId)
    console.log("Pago obtenido de MP:", payment)
    if (!payment.preference_id) {
      throw new Error("Pago sin preference_id")
    }

    // 2️⃣ Buscar preferencia en DB
    const preference = await this.mpPreferenceRepo.findByPreferenceId(
      payment.preference_id
    )

    if (!preference) {
      throw new Error("Preferencia no encontrada")
    }

    // 3️⃣ Actualizar estado del pago
    await this.mpPreferenceRepo.updateStatus({
      mp_preference_id: payment.preference_id,
      mp_payment_id: payment.id,
      mp_merchant_order_id: payment.order_id,
      status: payment.status,
      status_detail: payment.status_detail,
      transaction_amount : payment.transaction_amount
    })
    
    
    let pedido = await this.orderRepository.findByIdPreference(payment.preference_id);
    if (!pedido) {
      throw new Error("Pedido no encontrado para la preferencia")
    }
    await this.orderRepository.updatePedidoTotal({
      id: pedido.id,
      total_pagado: payment.transaction_amount
    })
    pedido.total_pagado = payment.transaction_amount;
    // 4️⃣ Emitir novedad (evento)
    await this.onPaymentProcessed(pedido)
  }
}
