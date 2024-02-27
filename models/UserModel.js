const { timeStamp } = require('console');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  emailAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age:{
    type: DataTypes.INTEGER,
  },
  bioText: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: timeStamp,
  },
  profilePictureUrl: {
    type: DataTypes.STRING,
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true