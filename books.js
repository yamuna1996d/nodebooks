var express = require('express');
var express =require('express');
var parser=require('body-parser');
var mongoose = require('mongoose');

var app=express();
app.use(parser.urlencoded({extended:false}));
const bookSchema = new mongoose.Schema({
title:String,
author:String,
discription:String,
price:Number,
publisher:String,
distributer:String,
});
const bookmodel= mongoose.model('books',bookSchema);
mongoose.connect("mongodb+srv://userdb:ava1996@cluster0-6pimn.mongodb.net/test?retryWrites=true&w=majority");
app.get('/',(req,res)=>{
    res.send("hello");
});
app.post('/book',async(req,res)=>{
    try{
        var bookdata=new bookmodel(req.body);
        var result = await bookdata.save();
        res.json(result);
    }
    catch(error){
        Console.log(error);
        res.status(500).send(error);
    }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server Started");
});