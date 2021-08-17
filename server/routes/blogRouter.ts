import express from 'express'
import blogCtrl from '../controllers/blogCtrl'
import auth from '../middleware/auth'

const router = express.Router()


router.post('/blog', auth, blogCtrl.createBlog)

router.get('/home/blogs', blogCtrl.getHomeBlogs)

router.get('/blogs/category/:id', blogCtrl.getBlogsByCategory)

router.get('/blogs/user/:id', blogCtrl.getBlogsByUser)

router.get('/blog/:id', blogCtrl.getBlog)


export default router;