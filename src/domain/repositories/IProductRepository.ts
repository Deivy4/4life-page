import { ProductPay, Product } from "../entities/Product"

export interface IProductRepository {
  findById(id: string): Promise<ProductPay | null>
  getActivosConStock(): Promise<Product[] | null>
}
