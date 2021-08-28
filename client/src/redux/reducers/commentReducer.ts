import {
  ICommentState,
  CREATE_COMMENT,
  GET_COMMENTS,
  REPLY_COMMENT,
  ICommentType
} from '../types/commentType'

const initialState = {
  data: [],
  total: 1
}


const commentReducer = (
  state: ICommentState = initialState,
  action: ICommentType
): ICommentState => {
  switch(action.type){
    case CREATE_COMMENT:
      return{
        ...state,
        data: [action.payload, ...state.data]
      }
    
    case GET_COMMENTS:
      return action.payload

    case REPLY_COMMENT:
      return {
        ...state,
        data: state.data.map(item => (
          item._id === action.payload.comment_root
          ? {
            ...item,
            replyCM: [
              ...item.replyCM as [],
              action.payload
            ]
          }
          : item
        ))
      }
      
    default:
      return state
  }
}


export default commentReducer