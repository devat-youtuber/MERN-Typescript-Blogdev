import { AUTH, IAuth, IAuthType } from '../types/authType'


const authReducer = (state: IAuth = {}, action: IAuthType): IAuth => {
  switch (action.type){
    case AUTH:
      return action.payload
    default:
      return state
  }
}

export default authReducer;