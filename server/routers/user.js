const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');

router.post('/login',athontecation.login);
router.post('/signup',athontecation.signup);
module.exports=router;