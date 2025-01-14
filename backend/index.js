const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/',function(req,res){
    res.send('Hello world');
})

app.listen(port,function(){
    console.log(`App is listening on the port ${port}.`)
})