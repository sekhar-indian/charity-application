const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');

router.post('/login',athontecation.adminlogin);
router.post('/signup',athontecation.adminsignup);


module.exports=router;