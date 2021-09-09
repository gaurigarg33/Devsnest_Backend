const express = require("express");
const app = express();
//CRUD(create, read, update, delete) -> POST, GET, PUT, DELETE

const slash = (req,res) => {  
    res.send("hello"); //send string
};
const slash = (req,res) => { 
    res.send({a :1}); //send object
};
const slash = (req,res) => {  
    res.send(["a"]); //send array
};
const slash = (req,res) => {
    res.json({a:1});  //json is the most common used keyword
};
app.get("/", slash);


app.get('/' , (req , res)=> {
  res.status(200).send("Hello");
});


app.get('/products' , (req , res)=>
{
  res.send(req.query);      
});


app.get('/ab?cd' , (req , res)=>  //gives choice of writing b in url.
{
  res.send('abcd');
});


app.get('/ab+cd' , (req , res)=> //b can come any number of times in url
{
  res.send('abcd');
});


app.listen(5000);
