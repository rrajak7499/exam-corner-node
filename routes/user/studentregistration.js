const express= require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.render('user/studentregistration',{
        emailStatus:'true',
    });
});
module.exports=router;