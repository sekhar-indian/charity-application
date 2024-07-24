const Sequelize=require('sequelize');
const sequelize=require('../util/db');

const Payment=sequelize.define('payments',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    paymentid:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    payment_rf_id:{
        type:Sequelize.INTEGER
    },
    payment_status:{
        type:Sequelize.INTEGER
    }
})

module.exports=Payment;