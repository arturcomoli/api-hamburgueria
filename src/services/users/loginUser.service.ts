import { IUserLogin } from '../../interfaces/user'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AppError } from '../../errors/AppError'

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({ where: { email } })

  if (!user) {
    throw new AppError('Wrong email/password', 403)
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError('Wrong email/password', 403)
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: '1d'
  })

  return token
}

export default userLoginService
