require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 3306,
  dialect: 'mysql'
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
})();

module.exports = sequelize;