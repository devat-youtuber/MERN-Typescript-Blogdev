import jwt_decode from "jwt-decode";
import { AUTH } from '../redux/types/authType'
import { getAPI } from './FetchData'


interface IToken {
  exp: number
  iat: number
  id: string
}

export const checkTokenExp = async (token: string, dispatch: any) => {
  const decoded: IToken = jwt_decode(token)

  if(decoded.exp >= Date.now() / 1000) return;

  const res = await getAPI('refresh_token')
  dispatch({ type: AUTH, payload: res.data })
  return res.data.access_token;
}