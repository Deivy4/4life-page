import { IProductRepository } from "@/domain/repositories/IProductRepository"

export class GetActiveProductsWithStock {
  constructor(private productRepository: IProductRepository) {}
  
  async execute() {
    return await this.productRepository.getActivosConStock()
  }
}