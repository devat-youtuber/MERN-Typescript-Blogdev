import { Dispatch } from 'redux'
import { IAuth } from '../types/authType'
import { IAlertType, ALERT } from '../types/alertType'
import { checkImage, imageUpload } from '../../utils/ImageUpload'


export const updateUser = (
  avatar: File, name: string, auth: IAuth
) => async (dispatch: Dispatch<IAlertType>) => {
  if(!auth.access_token || !auth.user) return;

  let url = '';
  try {
    dispatch({ type: ALERT, payload: {loading: true}})
    if(avatar){
      const check = checkImage(avatar)
      if(check) 
        return dispatch({ type: ALERT,payload: { errors: check } })

      const photo = await imageUpload(avatar)
      console.log(photo)
    }

    dispatch({ type: ALERT, payload: {loading: false}})

  } catch (err: any) {
    dispatch({ type: ALERT, payload: {errors: err.response.data.msg}})
  }
}