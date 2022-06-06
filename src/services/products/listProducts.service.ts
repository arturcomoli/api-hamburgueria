import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/product.entity'

const productsListService = async () => {
  const productsRepository = AppDataSource.getRepository(Product)
  const products = productsRepository.find()

  return products
}

export default productsListService
