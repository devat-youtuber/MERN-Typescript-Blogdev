import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { IParams, RootStore, IBlog } from '../../utils/TypeScript'

import { getBlogsByUserId } from '../../redux/actions/blogAction'

import CardHoriz from '../cards/CardHoriz'
import Loading from '../global/Loading'
import Pagination from '../global/Pagination'

const UserBlogs = () => {
  const { blogsUser } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const user_id = useParams<IParams>().slug

  const [blogs, setBlogs] = useState<IBlog[]>()
  const [total, setTotal] = useState(0)

  const history = useHistory()
  const { search } = history.location

  useEffect(() => {
    if(!user_id) return;

    if(blogsUser.every(item => item.id !== user_id)){
      dispatch(getBlogsByUserId(user_id, search))
    }else{
      const data = blogsUser.find(item => item.id === user_id)
      if(!data) return;

      setBlogs(data.blogs)
      setTotal(data.total)
      if(data.search) history.push(data.search)
    }
  },[user_id, blogsUser, dispatch, search, history])

  const handlePagination = (num: number) => {
    const search = `?page=${num}`
    dispatch(getBlogsByUserId(user_id, search))
  }


  if(!blogs) return <Loading />;

  if(blogs.length === 0 && total < 1) return(
    <h3 className="text-center">No Blogs</h3>
  )

  return (
    <div>
      <div>
        {
          blogs.map(blog => (
            <CardHoriz key={blog._id} blog={blog} />
          ))
        }
      </div>

      <div>
        <Pagination 
        total={total}
        callback={handlePagination}
        />
      </div>
    </div>
  )
}

export default UserBlogs
