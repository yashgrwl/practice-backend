const mongoose=require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/form-api').then(() => console.log('databse connected'));

const s1=new mongoose.Schema({
    name:String,
    phone:Number,
    email:{
        type:String,
        validate(value)
        {
            if(!validator.isEmail(value))
            throw new Error('email is wrong')
        }
    },
    
    adress:String
})

const Form=new mongoose.model('Form',s1)
module.exports= Form