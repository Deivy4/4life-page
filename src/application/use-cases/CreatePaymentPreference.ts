import { IPaymentGateway } from '@/domain/services/IPaymentGateway'
import { IProductRepository } from '@/domain/repositories/IProductRepository'

type CreatePaymentPreferenceInput = {
  external_reference: string
  items: { idProduct: string }[]
}

export class CreatePaymentPreference {
  constructor(
    private productRepository: IProductRepository,
    private paymentGateway: IPaymentGateway
  ) {}

  async execute(input: CreatePaymentPreferenceInput) {
    if (!input.items.length) {
      throw new Error("No items provided")
    }

    const mpItems = []

    for (const item of input.items) {
      const product = await this.productRepository.findById(item.idProduct)

      if (!product) {
        throw new Error(`Producto no encontrado: ${item.idProduct}`)
      }

      mpItems.push({
        title: product.title,
        quantity: product.quantity ?? 1,
        unit_price: product.unit_price,
        currency_id: product.currency_id ?? "ARS",
      })
    }

    return this.paymentGateway.createPreference({
      external_reference: input.external_reference,
      items: mpItems,
    })
  }
}
