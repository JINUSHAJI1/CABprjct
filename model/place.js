const sequelize = require('./db');
const {DataTypes} = require('sequelize');
// const Review = require('./review');

const Place = sequelize.define('Place', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    start: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    end: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
    rate:{
        type: DataTypes.FLOAT,
        allowNull: false,
    }

});

module.exports = Place;