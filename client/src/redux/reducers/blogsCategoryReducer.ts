import {
  GET_BLOGS_CATEGORY_ID,
  IBlogsCategory,
  IGetBlogsCategoryType
} from '../types/blogType'


const blogsCategoryReducer = (
  state: IBlogsCategory[] = [],
  action: IGetBlogsCategoryType
): IBlogsCategory[] => {
  switch(action.type){
    case GET_BLOGS_CATEGORY_ID:
      return [...state, action.payload]

    default:
      return state;
  }
}


export default blogsCategoryReducer;