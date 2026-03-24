import { IProductRepository } from "@/domain/repositories/IProductRepository"
import { Product, ProductPay } from "@/domain/entities/Product"
import { supabaseServer  } from "@/lib/supabase/server"

export class SupabaseProductRepository implements IProductRepository {

  async findById(id: string): Promise<ProductPay | null> {
    const { data } = await supabaseServer
      .from("products")
      .select("*")
      .eq("id", id)
      .single()

    if (!data) return null

    return {
      id: data.id,
      title: data.name,
      unit_price: data.price,
      currency_id: "ARS",
      quantity : 0
    }
  }
  async getActivosConStock(): Promise<Product[] | null> {
    const { data, error } = await supabaseServer
      .from("products")
      .select(`
        *,
        product_stock (
          quantity
        )
      `)
      .eq("active", true)
      .gt("product_stock.quantity", 0)

    if (error) {
      console.error(error)
      return null
    }

    return data as Product[]
  }
}
