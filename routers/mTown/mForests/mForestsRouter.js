const express=require('express');
const path=require('path');

const mForestsRouter=express.Router();

mForestsRouter.use(express.static(path.join(__dirname,'../public')));

mForestsRouter.use(function (req,res,next) {
    //judge privileges and compile home page
    next();
});

mForestsRouter.get('/',function (req,res) {
    console.log(req.session.username+' is at home!');
    res.render('./mTown/mForests/mForests.hbs',{ title:'Home',layout:'./layouts/blankLayout.hbs',username:req.session.username });
});

module.exports=mForestsRouter;