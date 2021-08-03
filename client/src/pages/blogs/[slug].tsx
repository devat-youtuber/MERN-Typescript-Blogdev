import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import NotFound from '../../components/global/NotFound'
import CardVert from '../../components/cards/CardVert'

import { getBlogsByCategoryId } from '../../redux/actions/blogAction'

import { RootStore, IParams, IBlog } from '../../utils/TypeScript'



const BlogsByCategory = () => {
  const { categories, blogsCategory } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const { slug } = useParams<IParams>()

  const [categoryId, setCategoryId] = useState('')
  const [blogs, setBlogs] = useState<IBlog[]>()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const category = categories.find(item => item.name === slug)
    if(category) setCategoryId(category._id)
  },[slug, categories])


  useEffect(() => {
    if(!categoryId) return;

    if(blogsCategory.every(item => item.id !== categoryId)){
      dispatch(getBlogsByCategoryId(categoryId))
    }else{
      const data = blogsCategory.find(item => item.id === categoryId)
      if(!data) return;
      setBlogs(data.blogs)
      setTotal(data.total)
    }
  },[categoryId, blogsCategory, dispatch])


  if(!blogs) return <NotFound />;
  return (
    <div className="blogs_category">
      <div className="show_blogs">
        {
          blogs.map(blog => (
            <CardVert key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default BlogsByCategory
