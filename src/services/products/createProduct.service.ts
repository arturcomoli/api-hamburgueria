import { AppDataSource } from '../../data-source'
import { Product } from '../../entities/product.entity'
import { AppError } from '../../errors/AppError'
import { IProductCreate } from '../../interfaces/product'

const createProductService = async ({
  name,
  category,
  price,
  img
}: IProductCreate) => {
  const productRepository = AppDataSource.getRepository(Product)

  const productAlreadyExists = await productRepository.findOne({where: {name}});

  if(productAlreadyExists){
    throw new AppError('Produto já cadastrado', 409)
  }
 
  const product = new Product()
  product.name = name
  product.category = category
  product.price = price
  product.img = img

  productRepository.create(product)
  await productRepository.save(product)
  

  return product
}

export default createProductService
