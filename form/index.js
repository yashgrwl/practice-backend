const express=require('express')
const app=express();
const Form=require('./database')
const mongoose=require('mongoose')


app.set('view engine','hbs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/submit',async(req,res)=>{
    try{
      
      const f1=new Form(req.body)
      const result=await f1.save();
      console.log(result)
      res.render('index')
    }
    catch(e){
        console.log(e)
    }
})

app.get('/form',async (req,res)=>
{
    try{
    const result=await Form.find();
    res.send(result)
    }
    catch(e)
    {
        console.log(e);
    }
})
app.listen(8000,()=>{
    console.log('server running')
})