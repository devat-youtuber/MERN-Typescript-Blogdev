import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IComment, RootStore } from '../../utils/TypeScript'

import { replyComment } from '../../redux/actions/commentAction'

import Input from './Input'

interface IProps {
  comment: IComment
  showReply: IComment[]
  setShowReply: (showReply: IComment[]) => void
}

const CommentList: React.FC<IProps> = ({ 
  children, comment, showReply, setShowReply
}) => {
  const [onReply, setOnReply] = useState(false)
  const { auth } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  const handleReply = (body: string) => {
    if(!auth.user || !auth.access_token) return;

    const data = {
      user: auth.user,
      blog_id: comment.blog_id,
      blog_user_id: comment.blog_user_id,
      content: body,
      reply_user: comment.user,
      comment_root: comment.comment_root || comment._id,
      createdAt: new Date().toISOString()
    }


    setShowReply([...showReply, data])
    dispatch(replyComment(data, auth.access_token))
    setOnReply(false)
  }

  return (
    <div className="w-100">
      <div className="comment_box">
        <div className="p-2" dangerouslySetInnerHTML={{
          __html: comment.content
        }} />

        <div className="d-flex justify-content-between p-2">
          <small style={{cursor: 'pointer'}}
          onClick={() => setOnReply(!onReply)}>
            {onReply ? '- Cancel -' :'- Reply -'}
          </small>

          <small>
            { new Date(comment.createdAt).toLocaleString() }
          </small>
        </div>

      </div>

      {
        onReply && <Input callback={handleReply} />
      }
      
      { children }
    </div>
  )
}

export default CommentList
