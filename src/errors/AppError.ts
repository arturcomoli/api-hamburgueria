import { Response } from 'express'

export class AppError extends Error {
  statusCode

  constructor (message: string, statusCode: number) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const handleError = (err: AppError, res: Response) => {
  const { message, statusCode } = err

  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}
