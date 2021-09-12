import express from 'express'
import blogCtrl from '../controllers/blogCtrl'
import auth from '../middleware/auth'

const router = express.Router()


router.post('/blog', auth, blogCtrl.createBlog)

router.get('/home/blogs', blogCtrl.getHomeBlogs)

router.get('/blogs/category/:id', blogCtrl.getBlogsByCategory)

router.get('/blogs/user/:id', blogCtrl.getBlogsByUser)

router.route('/blog/:id')
  .get(blogCtrl.getBlog)
  .put(auth, blogCtrl.updateBlog)


export default router;