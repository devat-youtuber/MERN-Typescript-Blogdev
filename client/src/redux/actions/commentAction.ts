import { Dispatch } from 'redux'

import { ALERT, IAlertType } from '../types/alertType'
import { 
  CREATE_COMMENT,
  ICreateCommentType,
  GET_COMMENTS,
  IGetCommentsType
} from '../types/commentType'

import { IComment } from '../../utils/TypeScript'
import { postAPI, getAPI } from '../../utils/FetchData'


export const createComment = (
  data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | ICreateCommentType>) => {
  try {
    const res = await postAPI('comment', data, token)

    dispatch({
      type: CREATE_COMMENT,
      payload: { ...res.data, user: data.user }
    })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const getComments = (
  id: string
) => async(dispatch: Dispatch<IAlertType | IGetCommentsType>) => {
  try {
    let limit = 8;

    const res = await getAPI(`comments/blog/${id}?limit=${limit}`)

    dispatch({
      type: GET_COMMENTS,
      payload: {
        data: res.data.comments,
        total: res.data.total
      }
    })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}