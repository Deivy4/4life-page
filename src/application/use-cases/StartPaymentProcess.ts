import { CreatePaymentPreference } from "./CreatePaymentPreference"
import { SavePendingPayment } from "./SavePendingPayment"
import { CreateOrder } from "./CreateOrder"
import { randomUUID } from "crypto"

export class StartPaymentProcess {
  constructor(
    private createPreference: CreatePaymentPreference,
    private savePendingPayment: SavePendingPayment,
    private createOrder: CreateOrder
  ) {}

  async execute(input: {
    items: { idProduct: string }[]
    customer: {
      nombre: string
      telefono: string
      email: string
      ciudad: string
      direccion: string
    }
  }) {
      const paymentIntentId = randomUUID()

      // Guardar MP preferencia (pending)
      const mpRecord = await this.savePendingPayment.execute({
        mp_preference_id: paymentIntentId,
        items: input.items
      })

      // Crear pedido
      await this.createOrder.execute({
        mp_preferencia_id: mpRecord.id,
        customer: input.customer,
        items: input.items
      })

      //  Crear preferencia MP
      const preference = await this.createPreference.execute({
        items: input.items,
        external_reference: paymentIntentId,
      })    

    return preference
  }
}
