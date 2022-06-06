import { Request, Response } from 'express'
import createUserService from '../services/users/createUser.service'
import deleteUserService from '../services/users/deleteUser.service'
import userListService from '../services/users/listUsers.service'
import userLoginService from '../services/users/loginUser.service'
import updateUserService from '../services/users/updateUser.service'

export default class UsersController {
  static async store (req: Request, res: Response) {
    try {
      const { name, email, password } = req.body
      const newUser = await createUserService({ name, email, password })

      return res.status(201).send(newUser)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }

  static async login (req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const token = await userLoginService({ email, password })

      return res.status(201).json(token)
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
      const userList = await userListService()
      return res.status(200).send(userList)
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
      const { email, password, name } = req.body

      const user = await updateUserService({ id, email, password, name })

      return res.json(user)
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
      const user = await deleteUserService({ id })

      return res.status(204).json({ message: 'Usuário deletado com sucesso' })
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
