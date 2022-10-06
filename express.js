const express = require('express');
const app = express();

app.get("/hello",(req,res) => {res.send("Hello World")});

app.listen(4000, () => console.log("Hello"));

app.use ((req,res,next) =>{

    const logEntry ='host ${req.host}
    ip: ${req.ip}
    method: ${req.method}
    path:${req.path}
    time: {$ new Date ()'};
    console.log(logEntry);
    next();

});

app.get('/',(req,res) =>{
    res.send ('hello world!');
});