import React from 'react'
import { useParams } from 'react-router-dom'

import { IParams } from '../../utils/TypeScript'

import CreateBlog from '../create_blog'

const UpdateBlog = () => {
  const { slug } = useParams<IParams>()

  return <CreateBlog id={slug} />
}

export default UpdateBlog
