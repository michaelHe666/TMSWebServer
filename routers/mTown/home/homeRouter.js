const express=require('express');
const path=require('path');

const homeRouter=express.Router();

homeRouter.use(express.static(path.join(__dirname,'../public')));

homeRouter.use(function (req,res,next) {
    //judge privileges and compile home page
    next();
});

homeRouter.get('/',function (req,res) {
    console.log(req.session.username+' is at home!');
    res.render('./mTown/home/home.hbs',{ title:'Home',layout:'./layouts/privateLayout.hbs',username:req.session.username });
});

module.exports=homeRouter;