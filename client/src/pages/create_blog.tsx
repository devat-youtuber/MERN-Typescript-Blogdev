import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootStore, IBlog } from '../utils/TypeScript'
import { validCreateBlog } from '../utils/Valid'
import { imageUpload } from '../utils/ImageUpload'

import NotFound from '../components/global/NotFound'
import CreateForm from '../components/cards/CreateForm'
import CardHoriz from '../components/cards/CardHoriz'

import ReactQuill from '../components/editor/ReactQuill'

import { ALERT } from '../redux/types/alertType'

import { createBlog } from '../redux/actions/blogAction'


const CreateBlog = () => {
  const initState = {
    user: '',
    title: '',
    content: '',
    description: '',
    thumbnail: '',
    category: '',
    createdAt: new Date().toISOString()
  }

  const [blog, setBlog] = useState<IBlog>(initState)
  const [body, setBody] = useState('')

  const divRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')

  const { auth } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const div = divRef.current;
    if(!div) return;

    const text = (div?.innerText as string)
    setText(text)
  },[body])

  const handleSubmit = async() => {
    if(!auth.access_token) return;

    const check = validCreateBlog({...blog, content: text})
    if(check.errLength !== 0){
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } })
    }

    let newData = {...blog, content: body}

    dispatch(createBlog(newData, auth.access_token))
  }


  if(!auth.access_token) return <NotFound />;
  return (
    <div className="my-4 create_blog">

      <div className="row mt-4">
        <div className="col-md-6">
          <h5>Create</h5>
          <CreateForm blog={blog} setBlog={setBlog} />
        </div>

        <div className="col-md-6">
          <h5>Preview</h5>
          <CardHoriz  blog={blog} />
        </div>
      </div>  

      <ReactQuill setBody={setBody} />

      <div ref={divRef} dangerouslySetInnerHTML={{
        __html: body
      }} style={{display: 'none'}} />

      <small>{text.length}</small>
      
      <button className="btn btn-dark mt-3 d-block mx-auto"
      onClick={handleSubmit}>
        Create Post
      </button>
    </div>
  )
}

export default CreateBlog
