const express= require('express');
var Question= require ('../../Models/Question');
var router = express.Router();


router.get('/',(req,res)=>{
    res.render('question/editques',{
        title:'edit question',
        greetMsg:'EDIT QUESTION',
    });
});
router.post ('/',(req,res)=>{
    let userData ={
        question:req.body.question,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
    };
    const user= new Question(userData);
    user
        .save()
        .then((addedQuestion)=>{
        console.log (addedQuestion);
        res.render('question/editques',{
            title: 'editques',
            greetMsg: 'EDIT QUESTION',

        });
    })
        .catch ((e)=>{
            console.log ('error' + e);
            res.render('question/addquestion',{
                title: 'addquestion',
                greetMsg: 'ADD QUESTION',
                addStatus:'false',

            });

        });
});
module.exports=router;
