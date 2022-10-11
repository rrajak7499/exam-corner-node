const express= require('express');
var User = require ('../../Models/User');
var router = express.Router();

router.get('/',(req,res)=>{

    var name = req.body.name
    res.render('user/userlog', {

        loginStatus:'true',
    })
});

router.post('/',(req,res) => {
    let userData ={
        username: req.body.name,
        number: req.body.number,
        email: req.body.email,
        password: req.body.password,

    };
    const user = new User(userData);
    user
        .save()
        .then((addedUser)=>{
            console.log(addedUser);
            res.render('user/userlog', {
                loginStatus:'true',
            }); 
        })
        .catch ((e)=>{
            console.log('error' + e);
            res.render('user/studentregistration', {

                emailStatus:'false',
            }); 
        }      
        );
        

});
module.exports=router;
