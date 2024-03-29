import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.post('/user', userController.createUser)

export default router
