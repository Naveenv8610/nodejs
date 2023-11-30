const express = require('express');
const app = express();
app.get('/' , function(req , res ){
    res.send("hello world");
})
app.get('/navee' , function(req , res ){
    res.send('welcome to expess js ')
})
app.get('/navee/:id' , function(req , res){
    const id = req.params.id
    res.send('hey Naveen here' + id)
})
app.listen(9000, function(req , res){ 
    console.log("Running...")
})
