const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');
const userReq=require('../controllers/userReq.js');

router.post('/login',athontecation.login);
router.post('/signup',athontecation.signup);

router.get('/donationItemsData',userReq.donationItemsData);
router.put('/updateUserData',userReq.updateUserData);
router.get('/payments',userReq.payments);
router.get('/donations',userReq.donations);
router.get('/donationItemId:id',userReq.donationItemId);

module.exports=router;