const express= require('express');
const Question = require('../../Models/Question');
var router = express.Router();
router.post('/',(req,res) => {
    let userAns = [];
    let correctAns = 0, wrongAns = 0;
    userAns = Object.values(req.body);
    let existingAns = [];
    Question.find().select('ans -_id').then(result => {
        existingAns = result.map(ans => {
            res.render('user/usersumbit',{
               
            });
            return ans.ans;
        })
        console.log(existingAns);
        for(let i=0; i<userAns.length; i++) {
            if(userAns[i] === existingAns[i])
                correctAns++;
            else
                wrongAns++
        }
        console.log(correctAns, wrongAns)
        res.render('user/usersumbit',{
            correctAns, wrongAns
        })
    })
});
module.exports=router;



// [
//     'abc', 'bcd'
// ]