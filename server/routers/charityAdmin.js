const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');

router.post('/login',athontecation.charitylogin);
router.post('/signup',athontecation.charitysignup);


module.exports=router;