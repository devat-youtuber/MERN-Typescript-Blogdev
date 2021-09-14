import { IBlog } from '../../utils/TypeScript'

export const GET_HOME_BLOGS = "GET_HOME_BLOGS"
export const GET_BLOGS_CATEGORY_ID = "GET_BLOGS_CATEGORY_ID"
export const GET_BLOGS_USER_ID = "GET_BLOGS_USER_ID"
export const CREATE_BLOGS_USER_ID = "CREATE_BLOGS_USER_ID"
export const DELETE_BLOGS_USER_ID = "DELETE_BLOGS_USER_ID"


export interface IHomeBlogs {
  _id: string
  name: string
  count: number
  blogs: IBlog[]
}

export interface IGetHomeBlogsType {
  type: typeof GET_HOME_BLOGS,
  payload: IHomeBlogs[]
}

export interface IBlogsCategory {
  id: string
  blogs: IBlog[]
  total: number
  search: string
}

export interface IGetBlogsCategoryType {
  type: typeof GET_BLOGS_CATEGORY_ID,
  payload: IBlogsCategory
}

export interface IBlogsUser {
  id: string
  blogs: IBlog[]
  total: number
  search: string
}

export interface IGetBlogsUserType {
  type: typeof GET_BLOGS_USER_ID,
  payload: IBlogsUser
}

export interface ICreateBlogsUserType {
  type: typeof CREATE_BLOGS_USER_ID,
  payload: IBlog
}

export interface IDeleteBlogsUserType {
  type: typeof DELETE_BLOGS_USER_ID,
  payload: IBlog
}

export type IBlogUserType = 
| IGetBlogsUserType
| ICreateBlogsUserType
| IDeleteBlogsUserType