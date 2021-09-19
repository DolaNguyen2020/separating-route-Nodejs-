const express=require('express');
const routes=express.Router();

routes.get('/comment',(req,res)=>{
    res.send({data:"this is your data"});
});
routes.post('/comment',(req,res)=>{
    console.log(req.body);
    res.send({data:'comment created'});
})
routes.put('/comment',(req,res)=>{
    res.send({data:'comment edit'});
})
routes.delete('/comment',(req,res)=>{
    res.send({data:'del data'});
})
module.exports=routes