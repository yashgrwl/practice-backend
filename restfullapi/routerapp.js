const express=require('express')
const router=new express.Router();
const Student=require('./student')




router.get('/yash',(req,res)=>{
    res.send('hello router')
})


router.post('/student',async(req,res)=>{

    // create document in collection using rest-api
    try{
     const st1=new Student(req.body)
     const result= await st1.save()
     res.send('hello post data')
    }
    catch(e){
     console.log(e)
    }
    
 })
 
 // all students data
 router.get('/student',async(req,res)=>{
     try{
          const result=await Student.find();
          res.send(result)
     }
     catch(e)
     {
         console.log(e)
     }
 })
 
 // getting one student data by name
 router.get('/student/:name',async(req,res)=>{
     try{
         const name=req.params.name; 
         const result=await Student.find({name});
          res.send(result)
     }
     catch(e)
     {
         res.send(e)
     }
 })
 
 // updating data by name and id
 router.patch('/student/:name',async(req,res)=>{
     try{
         /*const _id=req.params.id; 
         console.log(_id)
        const result=await Student.findByIdAndUpdate({_id},req.body);
         
          res.send(result)
          res.send('hello')*/
 
          const name=req.params.name; 
         const result=await Student.updateOne({name},req.body);
         console.log(result)
          res.send(result)
     }
     catch(e)
     {
         res.send(e)
         console.log(e)
     }
 })
 // delete document
 router.delete('/student/:id',async(req,res)=>{
     try{
         const _id=req.params.id; 
         console.log(_id);
         const result=await Student.findOneAndDelete({_id});
         if(!_id || !result)
         return res.send('wrong id')
          res.send(result)
     }
     catch(e)
     {
         console.log(e)
     }
 })
 
 
 


module.exports=router