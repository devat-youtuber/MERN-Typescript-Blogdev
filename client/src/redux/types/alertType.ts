import { IAlert } from '../../utils/TypeScript'

export const ALERT = 'ALERT'

export interface IAlertType {
  type: typeof ALERT
  payload: IAlert
}