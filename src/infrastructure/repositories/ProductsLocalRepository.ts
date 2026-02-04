import { IProductRepository } from "@/domain/repositories/IProductRepository"
import { ProductPay } from "@/domain/entities/Product"
import products from "@/app/data/products.json"
export class ProductsLocalRepository implements IProductRepository {

  async findById(id: string): Promise<ProductPay | null> {
    let product = products.find(product => product.id === id) || null;
    return {
        id: product?.id || '',
        title: product?.title || '',
        unit_price: product?.precio || 0,
        currency_id: "ARS",
        quantity : 1
    }
}
}
