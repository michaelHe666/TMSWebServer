const express=require('express');
const path=require('path');

const mPubRouter=express.Router();

mPubRouter.use(express.static(path.join(__dirname,'../public')));

mPubRouter.use(function (req,res,next) {
    //judge privileges and compile home page
    next();
});

mPubRouter.get('/',function (req,res) {
    console.log(new Date()+':[inhabitant:'+req.session.username+']  goes to mForests!');
    res.render('./mTown/mForests/mForests.hbs',{ title:'mForests',layout:'./layouts/privateLayout.hbs',username:req.session.username });
});

module.exports=mPubRouter;