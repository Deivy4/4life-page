export interface MercadoPagoPaymentService {
  getPaymentById(paymentId: string): Promise<{
    id: string
    status: string
    status_detail?: string
    order_id?: string
    preference_id: string
    transaction_amount: number
    currency_id: string
    payer?: {
      email?: string
      phone?: {
        number?: string
      }
    },
    shipping_amount: number
  }>
}
