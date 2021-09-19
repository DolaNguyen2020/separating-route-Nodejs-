const express=require('express');
const routes=express.Router();
routes.get('/user',(req,res)=>{
    res.send({data:"this is your data"});
});
routes.post('/user',(req,res)=>{
    console.log(req.body);
    res.send({data:'user created'});
})
routes.put('/user',(req,res)=>{
    res.send({data:'user edit'});
})
routes.delete('/user',(req,res)=>{
    res.send({data:'del data'});
})
module.exports=routes