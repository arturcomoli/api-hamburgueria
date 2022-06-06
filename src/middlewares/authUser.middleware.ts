import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { AppError, handleError } from '../errors/AppError'

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization

    if (!token) {
      throw new AppError('No token found', 401)
    }

    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err) {
          throw new AppError('Invalid Token', 401)
        }
        req.userEmail = decoded.email

        next()
      }
    )
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res)
    }
  }
}
