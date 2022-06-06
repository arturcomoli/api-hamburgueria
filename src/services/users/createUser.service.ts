import bcrypt from 'bcrypt'
import { User } from '../../entities/user.entity'
import { ICreateUser } from '../../interfaces/user'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../errors/AppError'


const createUserService = async ({ name, email, password }: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User)

  const emailAlreadyExists = await userRepository.findOne({ where: { email } })

  if (emailAlreadyExists) {
    throw new AppError('Email já cadastrado', 409)
  }

  const user = new User()
  user.name = name
  user.email = email
  user.password = bcrypt.hashSync(password, 10)

  userRepository.create(user)
  await userRepository.save(user)

  return user
}

export default createUserService
