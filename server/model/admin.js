const Sequelize=require('sequelize');
const sequelize=require('../util/db');

const Admin=sequelize.define('admin',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    }
});

module.exports=Admin;