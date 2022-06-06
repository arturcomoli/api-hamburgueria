import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/product.entity'
import { AppError } from '../../errors/AppError'
import { IProduct } from '../../interfaces/product'

const updateProductService = async ({
  name,
  category,
  id,
  img,
  price
}: IProduct) => {
  const productRepository = AppDataSource.getRepository(Product)

  const product = await productRepository.findOne({ where: { id } })

  if (!product) {
    throw new AppError('Id não encontrado.', 404)
  }

  name ? (product.name = name) : product.name
  category ? (product.category = category) : product.category
  img ? (product.img = img) : product.img
  price ? (product.price = price) : product.price

  return productRepository.save(product)
}

export default updateProductService
