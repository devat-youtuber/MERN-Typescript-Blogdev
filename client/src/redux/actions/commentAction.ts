import { Dispatch } from 'redux'

import { ALERT, IAlertType } from '../types/alertType'
import { 
  CREATE_COMMENT,
  ICreateCommentType
} from '../types/commentType'

import { IComment } from '../../utils/TypeScript'
import { postAPI } from '../../utils/FetchData'


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