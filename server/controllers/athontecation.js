const sequelize=require('../util/db');
const Admin=require('../model/admin');
const CharityAdmin=require('../model/charityAdmin');
const Donation_items=require('../model/donation_items');
const Users=require('../model/user');
const Payment = require('../model/paayment');
const bcript=require('bcrypt');
const JWT=require('jsonwebtoken');
const { where } = require('sequelize');


const login=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const userCheck= await Users.findOne({where:{email:email}});
        if(userCheck){
            const hashPassword=await bcript.compare(password,userCheck.dataValues.password);
            if(hashPassword){
                const jwtToken= await JWT.sign({id:userCheck.dataValues.id,email:userCheck.dataValues.email},'munisekhar',{expiresIn:'30m'});
                res.status(200).send(jwtToken)
            }else{res.status(203).send('user Password Wrong')}
        }else{
            res.status(401).send('user Password Wrong')
        }
    }catch(err){
        res.status(404).send('Err',err)
    }
}
const signup=async (req,res,next)=>{
    const {name,email,password}=req.body;
    try{
        const hashPassword=await bcript.hash(password,2);
        const user= await Users.create({name:name,email:email,password:hashPassword});
    }catch(err){
        console.log(err)
    }
}

//admin
const adminlogin=(req,res,next)=>{
    const {email,name,password}=req.body;
    console.log(email,password)
}
const adminsignup=(req,res,next)=>{
    const {email,password}=req.body;
    console.log(email,password)
}

//charityDadmin
const charitylogin=(req,res,next)=>{
    const {email,name,password}=req.body;
    console.log(email,password)
}
const charitysignup=(req,res,next)=>{
    const {email,password}=req.body;
    console.log(email,password)
}

module.exports={
    login,
    signup,
    adminlogin,
    adminsignup,
    charitylogin,
    charitysignup

}