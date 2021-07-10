import express from 'express'
import categoryCtrl from '../controllers/categoryCtrl'
import auth from '../middleware/auth'

const router = express.Router()

router.route('/category')
  .get(categoryCtrl.getCategories)
  .post(auth, categoryCtrl.createCategory)

router.route('/category/:id')
  .patch(auth, categoryCtrl.updateCategory)
  .delete(auth, categoryCtrl.deleteCategory)

export default router;