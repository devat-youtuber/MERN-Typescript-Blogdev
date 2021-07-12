import * as types from '../types/categoryType'
import { ICategory } from '../../utils/TypeScript'

const categoryReducer = (
  state: ICategory[] = [], action: types.ICategoryType
): ICategory[] => {
  switch (action.type) {
    case types.CREATE_CATEGORY:
      return [action.payload, ...state]

    case types.GET_CATEGORIES:
      return action.payload
      
    default:
      return state;
  }
}

export default categoryReducer;