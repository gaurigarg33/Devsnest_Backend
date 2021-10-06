const express = require('express');
const app = express();
const path = require('path');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use('/' , (req , res)=>
{
  //res.sendFile(path.join(__dirname , "public/Hello.txt"),'test.txt')
   //res.sendFile(path.join(__dirname , "public/test.json"))
  // res.download(path.join(__dirname , "public/test.json"),"hello.json" )
  //res.download(path.join(__dirname , "public/image.jfif"),"download.jfif")

   //res.render('index',{ title:"Express" })
   res.status(201)
   .cookie("token","test", {
       expire:new Date(Date.now() + 8* 3600000)
   })
   .cookie("hello","hello")
   .redirect(301,"/admin")
  
});

app.listen(5000);
