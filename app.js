const express=require('express');
const app=express();
const PORT=8080;
app.use(express.json());
app.use(express.urlencoded());
const userRoute=require('./routes/User');
const commentRoute=require('./routes/Comment');
app.use('/api',userRoute);
app.use('/api',commentRoute);
app.listen(PORT,()=>{
    console.log("server running");
})