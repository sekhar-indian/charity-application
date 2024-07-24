const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');
const adminReq=require('../controllers/adminReq');

router.post('/login',athontecation.adminlogin);
router.post('/signup',athontecation.adminsignup);



module.exports=router;