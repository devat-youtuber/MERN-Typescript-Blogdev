import { Dispatch } from 'redux'

import { ALERT, IAlertType } from '../types/alertType'
import { 
  ICreateCommentType,
  GET_COMMENTS,
  IGetCommentsType,
  IReplyCommentType,
  UPDATE_COMMENT,
  UPDATE_REPLY,
  IUpdateType,
  DELETE_COMMENT,
  DELETE_REPLY,
  IDeleteType
} from '../types/commentType'

import { IComment } from '../../utils/TypeScript'
import { postAPI, getAPI, patchAPI, deleteAPI } from '../../utils/FetchData'
import { checkTokenExp } from '../../utils/checkTokenExp'



export const createComment = (
  data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | ICreateCommentType>) => {
  const result = await checkTokenExp(token, dispatch)
  const access_token = result ? result : token
  try {
    await postAPI('comment', data, access_token)

    // dispatch({
    //   type: CREATE_COMMENT,
    //   payload: { ...res.data, user: data.user }
    // })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const getComments = (
  id: string, num: number
) => async(dispatch: Dispatch<IAlertType | IGetCommentsType>) => {
  try {
    let limit = 4;

    const res = await getAPI(`comments/blog/${id}?page=${num}&limit=${limit}`)

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


export const replyComment = (
  data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | IReplyCommentType>) => {
  const result = await checkTokenExp(token, dispatch)
  const access_token = result ? result : token
  try {
    await postAPI('reply_comment', data, access_token)

    // dispatch({
    //   type: REPLY_COMMENT,
    //   payload: { 
    //     ...res.data, 
    //     user: data.user,
    //     reply_user: data.reply_user
    //   }
    // })
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const updateComment = (
  data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | IUpdateType>) => {
  const result = await checkTokenExp(token, dispatch)
  const access_token = result ? result : token
  try {
    dispatch({ 
      type: data.comment_root ? UPDATE_REPLY : UPDATE_COMMENT, 
      payload: data 
    })

    await patchAPI(`comment/${data._id}`, { data }, access_token)

  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const deleteComment = (
  data: IComment, token: string
) => async(dispatch: Dispatch<IAlertType | IDeleteType>) => {
  const result = await checkTokenExp(token, dispatch)
  const access_token = result ? result : token
  try {
    dispatch({ 
      type: data.comment_root ? DELETE_REPLY : DELETE_COMMENT, 
      payload: data 
    })
    
    await deleteAPI(`comment/${data._id}`, access_token)

  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}