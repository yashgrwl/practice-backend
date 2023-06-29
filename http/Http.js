/*const http=require('http')
const fs = require('fs');
const path = require('path');

const server=http.Server((req,res)=>{
    var url=req.url
    var method=req.method;
    if(method=='GET')
    {
        var filepath='.'+url;
        if(filepath=='./')
        filepath='./index.html'

        const resolve=path.resolve(filepath)

        fs.readFile(resolve,(err,data)=>{
            if(err)
            {
                res.statusCode=404;
                res.setHeader('content-type','text/plain')
                res.end('404 not found')
            }
            else
            {
                res.statusCode=200;
                res.setHeader('content-type','text/html')
                res.end(data)
            }
        })
    }
    else
    {
        res.statusCode=404;
        res.setHeader('content-type','text/plain')
        res.end('404 not found')
    }
})
server.listen(8000,'127.0.0.1',()=>{
    console.log('server running')
})*/