import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors/AppError'
import { Product } from '../../entities/product.entity'
import { IProductId } from '../../interfaces/product'

const deleteProductService = async ({ id }: IProductId) => {
  const productRepository = AppDataSource.getRepository(Product)

  const product = await productRepository.findOne({ where: { id } })

  if (!product) {
    throw new AppError('Produto não encontrado', 404)
  }

  return await productRepository.delete(id)
}

export default deleteProductService
