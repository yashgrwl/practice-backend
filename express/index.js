const express=require('express')
const app=express();

const path=require('path')

console.log(path.join(__dirname,'./views'));


app.use(express.static(path.join(__dirname,'./views')))

app.get('/',(req,res)=>
{
    res.send('Hello world')
})
app.listen(8000,()=>{
    console.log('server running')
})
