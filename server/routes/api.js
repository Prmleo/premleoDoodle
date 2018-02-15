const express = require('express');
const router = express.Router();
const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

//connect
const connection =(closure)=>{
    return MongoClient.connect
    ('mongodb://localhost:27017/leoDoodle',(err,db)=>{
    if(err) return console.log(err);
    closure(db);
});
};

//Error handling

const sendError=(err,res)=>{
    response.status=502;
    response.message=typeof err =='object'? err.message:err;
    res.status(502).json(response);

};

//response handling
let response={
    status:200,data:[],message:null
};

router.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Headers",
"Origin,X-Requested-With,Content-Type,Accept");
next();});


//Get users

router.get('/data',(req,res)=>{
    connection((db1)=>{
        db1.db('leoDoodle').collection('userData')
        .find()
        .toArray()
        .then((items)=>{
        response.data=items;
        res.json(response);
    })
    .catch((err)=>{
        console.log(err);
        sendError(err,res);
    });
    });
});

module.exports=router;