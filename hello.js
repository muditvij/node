const express = require("express");
const app = express();
const fs = require('fs')
const port = 3000;

function cnfm() {
    console.log("Server started successfully");
}
function me(req, res) {
    res.sendFile(__dirname + "/dropdown.html");
    console.log("recieved")
}
function collect(req, res) {
    res.send("Data sent");
    y=req.query.name;
    x=req.query.mob;
    fs.writeFile("fsfile.txt","Mobile: "+x+"  "+"Name:  "+y+"  "+"\n",{flag: 'a+'},cnfm)
    fs.writeFile("fsfile.txt",req.ip+"\n",{flag: 'a+'},cnfm)
    console.log("Query: Name: "+y)
    console.log("Query: Mobile Number: "+x)
}
app.listen(port, cnfm);
app.get("/home", me);
app.get("/data", collect);