import { Payment } from "mercadopago"
import mercadopago from "@/lib/mercadoPago"
import { MercadoPagoPaymentService } from "@/domain/payment/MercadoPagoPaymentService"


export class MercadoPagoPaymentServiceImpl
  implements MercadoPagoPaymentService {

  async getPaymentById(paymentId: string) {
    const payment = await new Payment(mercadopago).get({
      id: paymentId,
    })
    console.log("MP PAYMENT", payment)
    // Validaciones mínimas (muy importante)
    if (!payment.status) {
      throw new Error("Payment sin status")
    }

    if (!payment.id) {
      throw new Error("Payment sin preference_id")
    }

    if (!payment.transaction_amount) {
      throw new Error("Payment sin transaction_amount")
    }

    if (!payment.currency_id) {
      throw new Error("Payment sin currency_id")
    }

    return {
      id: String(payment.id),
      status: payment.status,
      status_detail: payment.status_detail,
      order_id: payment.order
        ? String(payment.order.id)
        : undefined,
      preference_id: String(payment.external_reference),
      transaction_amount: payment.transaction_amount,
      currency_id: payment.currency_id,
      payer: payment.payer
        ? {
            email: payment.payer.email,
            phone: payment.payer.phone
              ? { number: payment.payer.phone.number }
              : undefined,
          }
        : undefined,
    }
  }
}

