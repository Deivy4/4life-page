export interface MPPreferenceRepository {
  create(input: {
    mp_preference_id: string
    product_id: string
    quantity: number
    status: "pending" | "approved" | "rejected" | "cancelled"
  }): Promise<{
    id: string
    mp_preference_id: string
    status: string
  }>

  findByPreferenceId(
    mp_preference_id: string
  ): Promise<{
    id: string
    status: string
  } | null>

  updateStatus(input: {
    mp_preference_id: string
    mp_payment_id?: string
    mp_merchant_order_id?: string
    status: string
    status_detail?: string,
    transaction_amount?: number
  }): Promise<void>
}
