const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Booking = sequelize.define('Booking',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    start: {
        type: DataTypes.STRING(50),
        allowNull:false
    },
    end: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    paddress:{
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    daddress:{
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    pname :{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    contactnumber:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    passengersno:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cab_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cabnumber:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = Booking;