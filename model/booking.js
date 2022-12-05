const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Booking = sequelize.define('Booking',{
    bid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    // fid: {
        
    // },
    pid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
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
    }
});

module.exports = Booking;