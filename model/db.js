const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("cabmvc", "root", "jinu", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;