const express= require('express');
const Question = require('../../Models/Question');
var User = require('../../Models/User');
var router = express.Router();
router.post('/',(req,res)=>{
    let question = [];
    Question.find().then(result => {
        question = result;
    }).catch(e => {
        console.log(e);
    });
    userData = {
       email: req.body.email,
       password: req.body.password, 
    };
    console.log(userData);
    User.findOne(userData)
    .then((msg) => {
        if(!msg) {
            
                res.render('user/userlog',{
                    emailStatus:'true', 
                    loginStatus:'false',
                    qes: question
                });
            } else {
            res.render('user/username',{
                loginStatus:'true',
                qes: question,
            });
        }  

            })
            .catch((err) => {
                console.log('error' + err);
            });
    });




module.exports=router;
