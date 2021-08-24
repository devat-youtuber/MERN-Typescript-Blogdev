import { IComment } from '../../utils/TypeScript'

export const CREATE_COMMENT = "CREATE_COMMENT"
export const GET_COMMENTS = "GET_COMMENTS"

export interface ICommentState {
  data: IComment[],
  total: number
}

export interface ICreateCommentType {
  type: typeof CREATE_COMMENT,
  payload: IComment
}

export interface IGetCommentsType {
  type: typeof GET_COMMENTS,
  payload: ICommentState
}


export type ICommentType = 
| ICreateCommentType
| IGetCommentsType