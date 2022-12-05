
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Cab = sequelize.define('Cab',{
   
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    drivername: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    
    drivercontact: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   driveremail: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    licencenumber: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
   cabnumber : {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    myear:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cabcapacity:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cabmodel:{
     type: DataTypes.STRING(30),
        allowNull: true
    },
    password:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    dstatus:{
        type:DataTypes.STRING(10),
        allowNull:true
    }

});

module.exports = Cab;