const express = require('express');
const server = express();
server.get('/', function(req,res){
    res.send('<h1>Hello World with Express and Nodejs from Runnig in Docker Container</h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Server on Port 3000');
});