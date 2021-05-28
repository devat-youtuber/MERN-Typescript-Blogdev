export interface INewUser {
  name: string
  account: string
  password: string
}

export interface IDecodedToken {
  newUser?: INewUser
  iat: number
  exp: number
}