import React, { useState } from 'react'

import { IComment } from '../../utils/TypeScript'

import AvatarComment from './AvatarComment'
import AvatarReply from './AvatarReply'
import CommentList from './CommentList'


interface IProps {
  comment: IComment
}

const Comments: React.FC<IProps> = ({ comment }) => {
  const [showReply, setShowReply] = useState<IComment[]>([])


  return (
    <div className="my-3 d-flex" style={{
      opacity: comment._id ? 1 : 0.5,
      pointerEvents: comment._id ? 'initial' : 'none'
    }}>
      <AvatarComment user={comment.user} /> 

      <CommentList 
      comment={comment} 
      showReply={showReply}
      setShowReply={setShowReply}
      >
        {
          showReply.map((comment, index) => (
            <div key={index} style={{
              opacity: comment._id ? 1 : 0.5,
              pointerEvents: comment._id ? 'initial' : 'none'
            }}>
              <AvatarReply
                user={comment.user}
                reply_user={comment.reply_user}
              />

              <CommentList 
                comment={comment} 
                showReply={showReply}
                setShowReply={setShowReply}
              />
            </div>
          ))
        }

      </CommentList>
    </div>
  )
}

export default Comments
