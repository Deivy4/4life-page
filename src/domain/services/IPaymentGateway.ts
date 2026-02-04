export interface IPaymentGateway {
  createPreference(input: {
    items: {
      title: string
      quantity: number
      unit_price: number
      currency_id?: string
    }[],
    external_reference : string
  }): Promise<{ id: string; link: string }>
}
