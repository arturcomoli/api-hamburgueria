import { Router } from 'express'
import UsersController from '../controllers/users.controller'
import { authUser } from '../middlewares/authUser.middleware'
import {
  userCreateSchema,
  validateUserCreate
} from '../middlewares/validateUserCreate.middleware'

const usersRouter = Router()

usersRouter.post(
  '/',
  validateUserCreate(userCreateSchema),
  UsersController.store
)
usersRouter.post('/login', UsersController.login)
usersRouter.get('/', UsersController.index)
usersRouter.patch('/:id', authUser, UsersController.update)
usersRouter.delete('/:id', authUser, UsersController.delete)



export default usersRouter
