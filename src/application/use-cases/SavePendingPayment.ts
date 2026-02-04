import { MPPreferenceRepository } from "@/domain/repositories/MPPreferenceRepository"

export class SavePendingPayment {
  constructor(private repository: MPPreferenceRepository) {}

  async execute(input: {
    mp_preference_id: string
    items: { idProduct: string; quantity?: number }[]
  }) {
    return this.repository.create({
      mp_preference_id: input.mp_preference_id,
      product_id: input.items[0].idProduct,
      quantity: input.items[0].quantity ?? 1,
      status: "pending"
    })
  }
}
