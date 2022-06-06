import { Request, Response } from 'express'
import createProductService from '../services/products/createProduct.service'
import deleteProductService from '../services/products/deleteProduct.service'
import productsListService from '../services/products/listProducts.service'
import updateProductService from '../services/products/updateProduct.service'

export default class ProductsController {
  static async store (req: Request, res: Response) {
    try {
      const { name, category, price, img } = req.body
      
      const newProduct = await createProductService({ name, category, price, img })

      return res.status(201).send(newProduct)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }

  static async index (req: Request, res: Response) {
    try {
      const productList = await productsListService()
      return res.status(200).send(productList)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }

  static async update (req: Request, res: Response) {
    try {
      const { id } = req.params
      const { name, category, price, img } = req.body

      const product = await updateProductService({
        id,
        name,
        category,
        price,
        img
      })

      return res.json(product)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }

  static async delete (req: Request, res: Response) {
    try {
      const { id } = req.params

      const product = await deleteProductService({ id })

      return res.status(204).json({ message: 'Produto deletado com sucesso' })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }
}
