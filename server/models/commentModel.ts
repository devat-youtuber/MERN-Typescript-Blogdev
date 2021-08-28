import mongoose from 'mongoose'
import { IComment } from '../config/interface'


const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user' },
  blog_id: mongoose.Types.ObjectId,
  blog_user_id: mongoose.Types.ObjectId,
  content: { type: String, required: true },
  replyCM: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  reply_user: { type: mongoose.Types.ObjectId, ref: 'user' },
  comment_root: { type: mongoose.Types.ObjectId, ref: 'comment' }
}, {
  timestamps: true
})


export default mongoose.model<IComment>('comment', commentSchema)