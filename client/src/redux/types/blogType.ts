import { IBlog } from '../../utils/TypeScript'

export const GET_HOME_BLOGS = "GET_HOME_BLOGS"
export const GET_BLOGS_CATEGORY_ID = "GET_BLOGS_CATEGORY_ID"

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
}

export interface IGetBlogsCategoryType {
  type: typeof GET_BLOGS_CATEGORY_ID,
  payload: IBlogsCategory
}