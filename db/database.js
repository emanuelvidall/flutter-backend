import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config({ path: '.env' })

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.ROOT_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
  }
)

;(async function () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    await sequelize.sync()
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
})()

export default sequelize
