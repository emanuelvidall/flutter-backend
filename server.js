import express from 'express'
import cors from 'cors'
import allRoutes from './routes/routes.js'

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(allRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
