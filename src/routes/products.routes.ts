import { Router } from 'express'
import ProductsController from '../controllers/products.controller'

const productsRouter = Router()

productsRouter.post('/', ProductsController.store)
productsRouter.get('/', ProductsController.index)
productsRouter.patch('/:id', ProductsController.update)
productsRouter.delete('/:id', ProductsController.delete)

export default productsRouter
