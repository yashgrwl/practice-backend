var obj={
    key1:'yash',
    key2:'Agarwal'
};
const jdata=JSON.stringify(obj);

console.log(jdata)
const fs=require('fs')
fs.readFile('./dummy.txt',(err,data)=>{
    obj=JSON.parse(data);
    console.log(obj.key1)
})