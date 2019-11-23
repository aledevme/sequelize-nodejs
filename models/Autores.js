const Sequelize = require('sequelize');
const sequelize = require('../db/db')

const User = sequelize.define('autores', {
    // attributes
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    edad: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    pais:{
      type:Sequelize.STRING
    }
  }, {
    // options
});

module.exports = User;