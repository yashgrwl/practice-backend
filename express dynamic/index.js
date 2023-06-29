const express=require('express')
const app=express()
const path=require('path')

app.set('view engine', 'hbs');
/*app.set('views',path.join(__dirname,'./template'))
console.log(path.join(__dirname,'./template'))*/

app.get('/',(req,res)=>{
    res.render('index',{
        data:'yash'
    })
})
app.get('/about.hbs',(req,res)=>{
    res.render('about',{
        data:'yash'
    })
})
app.listen(8000,()=>{
    console.log('server running')
})