const express = require('express')
const { body, validationResult } = require('express-validator')
const {
  createUser,
  editUser,
  fetchUser
} = require('../controllers/userController')

const router = express.Router()

router.post(
  '/create-user',
  [body('email').isEmail().withMessage('Invalid email')],
  createUser
)
router.post('/edit-user', editUser)
router.get('/fetch-user', fetchUser)
