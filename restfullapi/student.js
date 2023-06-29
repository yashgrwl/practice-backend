const mongoose=require('mongoose');
const validator=require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/students-api').then(() => console.log('databse connected'));


const s1=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        validate(value)
        {
            if(!validator.isEmail(value))
            throw new Error('email is wrong')
        }
    },
    phone:Number,
    adress:String
})

const Student=new mongoose.model('Student',s1)
module.exports= Student