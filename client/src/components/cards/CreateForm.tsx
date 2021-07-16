import React from 'react'
import { useSelector } from 'react-redux'

import { RootStore, IBlog, InputChange } from '../../utils/TypeScript'


interface IProps {
  blog: IBlog,
  setBlog: (blog: IBlog) => void
}

const CreateForm: React.FC<IProps> = ({blog, setBlog}) => {
  const { categories } = useSelector((state: RootStore) => state)

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target
    setBlog({...blog, [name]:value})
  }

  const handleChangeThumbnail = (e: InputChange) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    if(files){
      const file = files[0]
      setBlog({...blog, thumbnail: file})
    }
  }

  return (
    <form>
      <div className="form-group position-relative">
        <input type="text" className="form-control"
        value={blog.title} name="title" 
        onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.title.length}/50
        </small>
      </div>

      <div className="form-group my-3">
        <input type="file" className="form-control"
        accept="image/*" onChange={handleChangeThumbnail} />
      </div>

      <div className="form-group position-relative">
        <textarea className="form-control" rows={4}
        value={blog.description} style={{resize: 'none'}}
        name="description" onChange={handleChangeInput} />

        <small className="text-muted position-absolute"
        style={{ bottom: 0, right: '3px', opacity: '0.3'}}>
          {blog.description.length}/200
        </small>
      </div>

      <div className="form-group my-3">
        <select className="form-control text-capitalize"
        value={blog.category} name="category"
        onChange={handleChangeInput}>
          <option value="">Choose a category</option>
          {
            categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))
          }
        </select>
      </div>
    </form>
  )
}

export default CreateForm
