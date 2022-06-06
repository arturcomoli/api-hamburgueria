export interface IUser {
  id: string
  name: string
  senha: string
  requests: Array<object>
}

export interface ICreateUser {
  name: string
  email: string
  password: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserUpdate {
  password: string
  name: string
  email: string
  id: string
}

export interface IUserId {
  id: string
}
