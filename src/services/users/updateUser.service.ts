import bcrypt from 'bcrypt'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { IUserUpdate } from '../../interfaces/user'

const updateUserService = async ({
  name,
  password,
  email,
  id
}: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({ where: { id } })

  if (!user) {
    throw new AppError('Id não encontrado.', 404)
  }

  name ? (user.name = name) : user.name
  password ? (user.password = bcrypt.hashSync(password, 10)) : user.name
  email ? (user.email = email) : user.email

  return userRepository.save(user)
}

export default updateUserService