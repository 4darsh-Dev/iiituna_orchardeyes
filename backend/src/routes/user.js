import express from 'express'
import { body, validationResult } from 'express-validator'
import {
  createUser,
  editUser,
  fetchUser
} from '../controllers/userController.js'

const router = express.Router()

router.post(
  '/create-user',
  [body('email').isEmail().withMessage('Invalid email')],
  createUser
)
router.post('/edit-user', editUser)
router.get('/fetch-user', fetchUser)
export default router
