const express=require('express');
const app=express();
const cors = require('cors');
const Transaction=require('./model')
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://alijan061333:ZOuZnmj3c6P8J4Sj@cluster0.lsx3z8b.mongodb.net/?retryWrites=true&w=majority")
app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.get('/',(req,res)=>{
  res.send("hwloo");
})

app.post('/api',async(req,res)=>{
 const {name,description,datetime,price}=req.body;
 const some=await Transaction.create({name,description,datetime,price});

 res.json(`${name}, ${description}, ${datetime}`);
})
app.get('/api',async(req,res)=>{
 const {name,description,datetime,price}=req.body;
const transaction= await Transaction.find({});
res.json(transaction);
//  res.json(`${name}, ${description}, ${datetime}`);
})


app.listen(3001,()=>{ 
    console.log("listening at 3001 port")
})

