import { IBlog } from '../../utils/TypeScript'

export const GET_HOME_BLOGS = "GET_HOME_BLOGS"

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