const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const userSchema =new Schema ({
    question: {
        type: String,
        required: true,
        unique: true },
    a:{
    type: String,
    required: true
   },
   b:{
    type: String,
    required: true
   },
   c:{
    type: String,
    required: true
   },
   d:{
    type: String,
    required: true
   },
   ans: {
       type: String,
       required: true
   }
});
module.exports = mongoose.model('Question', userSchema);




