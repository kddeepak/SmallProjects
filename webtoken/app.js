var express = require('express');
var jwt = require('jsonwebtoken');
var passport = require('passport');

var app = express();

app.get('/login',(req,res)=>{
    res.json({
        login :"sucess",
        user :"ok",
        working  : "Yes"
    });
});

app.post('/api/posts',(req,res)=>{

    const headerKey = req.headers['authorization'];

    if(headerKey !== undefined){
       
    console.log(headerKey);

    const splittedData = headerKey.split(' ');

    const getToken = splittedData[1];

    req.token = getToken;

    jwt.verify(req.token,'secretkey',(err,userData)=>{

        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message :'Posted created....',
                userData
            });
        }
    });
}else{
    res.send({message :"gadab system"});
}

});


//data is send in a post request
app.post('/api/login',(req,res)=>{

    student = {
        name : "Deepak singh",
        email : "kddeepaksingh@gmail.com",
        rollno :"1602910073",
        college : "Kiet Ghaziabad"
    };

    jwt.sign({student},'secretkey',{expiresIn :'30s'},(err,token)=>{
    
        res.json({
            token
        });

    });

   // res.json(student);

});

app.listen(5000 , ()=> console.log('Server started at 5000'));