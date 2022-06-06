import { Request, Response } from 'express'

export default class RequestsController {
  static async store (req: Request, res: Response) {
    try {
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
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send({
          error: error.name,
          message: error.message
        })
      }
    }
  }
  static async show (req: Request, res: Response) {
    try {
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
