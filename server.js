var express = require("express");
var app =express();
var port = process.env.PORT || 4500;
console.log(port)
app.use(express.static(__dirname+"/dist/dashboard/"))
app.listen(port,()=>{console.log("server running on port number:"+port)})