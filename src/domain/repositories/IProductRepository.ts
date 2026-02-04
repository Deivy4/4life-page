import { ProductPay } from "../entities/Product"

export interface IProductRepository {
  findById(id: string): Promise<ProductPay | null>
}
