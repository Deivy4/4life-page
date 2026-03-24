export interface ProductPay {
  id: string
  title: string
  unit_price: number
  currency_id: string
  quantity : number
}
export interface ProductStock {
  quantity: number
}
export interface Product {
  id: string
  name: string
  price: number
  is_active: boolean
  url_image?: string
  description: string,
  product_stock: ProductStock | null
}
