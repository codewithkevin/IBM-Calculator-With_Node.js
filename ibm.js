const express = require("express")

const bodypasser = require("body-parser");

const app = express()

app.use(bodypasser.urlencoded({extended: true}));

app.use('/css', express.static(__dirname + "/css"))

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})


app.post("/", function(req, res){
    var num1 = req.body.num1;
    
    var num2 = req.body.num2;

    var result = num1 + num2;

    res.send("Your result is: " + result)
})


app.listen(4000, function(){
    console.log("Server is running on port 4000")
})