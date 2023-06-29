const express=require('express')
const app=express()
const mongoose = require('mongoose');
const validator=require('validator')
mongoose
  .connect("mongodb+srv://yashgrwl14:TtbjKzmSx1KsqcDk@cluster0.yjsgntn.mongodb.net/react?retryWrites=true&w=majority")
  .then(() => console.log("database connected")).catch((err)=>{
    console.log(err);
  });

const s1=new mongoose.Schema({
    name:String,
    class:Number,
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value))
            throw new Error('email is wrong')
        }
    },
    active:Boolean
})
const Student=new mongoose.model('Student',s1)
const st1=new Student({
    name:'Yashi Agarwal',
    class:'90',
    email:'yashgrwl14@gmail.com',
    active:true
    })
    const insert=async()=>{
        const result=await Student.insertMany([st1])
        console.log(result)
    }
    insert()

    
// Student name collection is created in database

// now if we want to add document in it 
/*const createDocument=async()=>{
    
        const st1=new Student({
        name:'Yashi Agarwal',
        class:'90',
        active:true
        })
        const st2=new Student({
            name:'Yash0 Agarwal',
            class:'90',
            active:true
        })
        const st3=new Student({
            name:'Yashm Agarwal',
            class:'90',
            active:true
        })
        const st4=new Student({
            name:'Yashp Agarwal',
            class:'90',
            active:true
        })
    try{
    
    const result=await Student.insertMany([st1,st2,st3,st4])
    console.log(result)
   }
   catch(err){
      console.log(err)
   }

}
createDocument()*/

// find document
/*const findDocument=async()=>{
    const res=await Student.find({name:'Yashi Agarwal'}).select({class:1})
    console.log(res)
}
findDocument();*/

// find_1 $gt->greater than $lt->less than $in->inside array 

/*const findDocument=async()=>{
    const res=await Student.find({class:{$in:[90,11]}}).select({class:1})
    console.log(res)
}
findDocument();

const findDocument=async()=>{
    const res=await Student.find({$or:[{name:"Yash Agarwal"},{class:{$in:[90,12]}}]}).select({class:1,name:1})
    console.log(res)
}
findDocument();
*/

//update document

const updateDocument=async(_id)=>{
    const res=await Student.updateOne({_id},{name:'Yasho Agarwal'})
    console.log(res)
}
updateDocument("64808e6e55256b89116f97c1")
