const express=require('express')
const app=express()

const port=3000||process.env.port

const Student=require('./student.js')
const mongoose=require('mongoose')

const router=require('./routerapp.js')

app.use(express.json())

app.use(router)
app.get('/',(req,res)=>{

    res.send("hello world")
})

app.listen(port,()=>
{
    console.log(`server running on port ${port}`)
})


/*

app.post('/student',async(req,res)=>{

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
app.get('/student',async(req,res)=>{
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
app.get('/student/:name',async(req,res)=>{
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
app.patch('/student/:name',async(req,res)=>{
    try{
        const _id=req.params.id; 
        console.log(_id)
       const result=await Student.findByIdAndUpdate({_id},req.body);
        
         res.send(result)
         res.send('hello')

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
app.delete('/student/:id',async(req,res)=>{
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



*/
/* // testing database connected to page or not
const st1=new Student({
    name:"yashkakalmsmso",
    email:'yashgrwl14@gmail.com',
    phone:908293990,
    adress:'slxmxdlssls'

})
st1.save().then(()=>{console.log('data save')}).catch((err)=>{
    console.log(err)
})
*/