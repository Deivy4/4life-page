import { IProductRepository } from "@/domain/repositories/IProductRepository"
import { ProductPay, Product } from "@/domain/entities/Product"
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

  async getActivosConStock(): Promise<Product[] | null> {
    return products.map(p => ({
      id: p.id,
      name: p.title,
      price: p.precio,
      is_active: true,
      url_image: p.urlImage,
      description: p.text,
      product_stock: { quantity: 99 }
    }))
  }
}
