import { ChangeEvent, FormEvent } from 'react'
import rootReducer from '../redux/reducers/index'

export type InputChange = ChangeEvent<
  | HTMLInputElement 
  | HTMLTextAreaElement 
  | HTMLSelectElement
>

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

export interface IUserProfile extends IUserRegister {
  avatar: string | File
}



export interface IAlert {
  loading?: boolean
  success?: string | string[]
  errors?: string | string[]
}


export interface ICategory {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface IBlog {
  _id?: string
  user: string | IUser
  title: string
  content: string
  description: string
  thumbnail: string | File
  category: string
  createdAt: string
}

export interface IComment {
  _id?: string
  user: IUser
  blog_id: string
  blog_user_id: string
  content: string
  replyCM: IComment[]
  reply_user?: IUser
  comment_root?: string
  createdAt: string
}