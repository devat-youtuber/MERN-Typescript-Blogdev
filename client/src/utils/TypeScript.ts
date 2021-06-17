import { ChangeEvent, FormEvent } from 'react'
import rootReducer from '../redux/reducers/index'

export type InputChange = ChangeEvent<HTMLInputElement>

export type FormSubmit = FormEvent<HTMLFormElement>

export type RootStore = ReturnType<typeof rootReducer>


export interface IParams {
  page: string
  slug: string
}

export interface IUserLogin {
  account: string
  password: string
}

export interface IUserRegister extends IUserLogin {
  name: string
  cf_password: string
}

export interface IUser extends IUserLogin {
  avatar: string
  createdAt: string
  name: string
  role: string
  type: string
  updatedAt: string
  _id: string
}

export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}