import React from 'react'
import { Link } from 'react-router-dom'

import { IBlog } from '../../utils/TypeScript'


interface IProps {
  blog: IBlog
}

const CardHoriz: React.FC<IProps> = ({blog}) => {

  return (
    <div className="card mb-3" style={{minWidth: "280px"}}>
      <div className="row g-0 p-2">
        <div className="col-md-4" style={{
          minHeight: '150px', maxHeight: '170px', overflow: 'hidden'
        }}>
          {
            blog.thumbnail && 
            <>
              {
                typeof(blog.thumbnail) === 'string'
                ? <Link to={`/blog/${blog._id}`}>
                    <img src={blog.thumbnail} 
                    className="w-100 h-100" 
                    alt="thumbnail" style={{objectFit: 'cover'}} />
                </Link>
                :<img src={URL.createObjectURL(blog.thumbnail)} 
                className="w-100 h-100" 
                alt="thumbnail" style={{objectFit: 'cover'}} />
              }
            </>
          }
          
        </div>
        
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.description}</p>
            <p className="card-text">
              <small className="text-muted">
                {new Date(blog.createdAt).toLocaleString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHoriz
