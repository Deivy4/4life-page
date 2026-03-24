// app/api/products/route.ts
import { SupabaseProductRepository } from "@/infrastructure/repositories/SupabaseProductRepository"
import { GetActiveProductsWithStock } from "@/application/use-cases/GetActiveProductsWithStock"
export async function GET() {
  const repo = new SupabaseProductRepository()
  const useCase = new GetActiveProductsWithStock(repo)

  const products = await useCase.execute()

  return Response.json(products)
}
