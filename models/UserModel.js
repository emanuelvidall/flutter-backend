import { Sequelize } from 'sequelize'
import database from '../db/database.js'

const User = database.define(
  'User',
  {
    userId: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    bioText: {
      type: Sequelize.TEXT,
    },
    profilePictureUrl: {
      type: Sequelize.STRING,
    },
  },
  {}
)

export default User
