import express from 'express'
import commentCtrl from '../controllers/commentCtrl'
import auth from '../middleware/auth'

const router = express.Router()

router.post('/comment', auth, commentCtrl.createComment)


export default router;