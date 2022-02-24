var express = require("express");
var app =express();
var port = process.env.PORT || 4500;
console.log(port)
app.use(express.static(__dirname+"/public/"))
app.get("/",(req,res)=>{
    res.send("<h1>HAIII..</h1>")
})
app.listen(port,()=>{console.log("server running on port number:"+port)})