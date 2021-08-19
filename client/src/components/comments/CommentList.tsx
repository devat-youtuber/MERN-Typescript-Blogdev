import React from 'react'
import { IComment } from '../../utils/TypeScript'


interface IProps {
  comment: IComment
}

const CommentList: React.FC<IProps> = ({ comment }) => {
  return (
    <div className="w-100">
      <div className="comment_box">
        <div className="p-2" dangerouslySetInnerHTML={{
          __html: comment.content
        }} />

        <div className="d-flex justify-content-between p-2">
          <small style={{cursor: 'pointer'}}>
            - Reply -
          </small>

          <small>
            { new Date(comment.createdAt).toLocaleString() }
          </small>
        </div>

      </div>
      
    </div>
  )
}

export default CommentList
