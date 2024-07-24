const express=require('express')
const router=express.Router();
const athontecation=require('../controllers/athontecation');
const charityAdminReq=require('../controllers/charityAdminReq');

router.post('/login',athontecation.charitylogin);
router.post('/signup',athontecation.charitysignup);

router.post('/donationItemsDataPost',charityAdminReq.donationItemsData);
router.get('/donationItemsData',charityAdminReq.donationItemsData);
router.get('/payments',charityAdminReq.payments);
router.delete('/donationItemDelete',charityAdminReq.donationItemDelete);
requir.put('/donationItemUpdate',charityAdminReq.donationItemUpdate);



module.exports=router;