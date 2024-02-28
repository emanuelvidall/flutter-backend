import express from 'express'
import userRoutes from './userRoutes.js'
import authRoutes from './authRoutes.js'

const router = express.Router()

router.use(userRoutes)
router.use(authRoutes)

router.get('/', (req, res) => {
  res.send('API ONLINE 🚀')
})

export default router
