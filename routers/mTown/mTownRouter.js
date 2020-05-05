//module required
const express=require('express');
const homeRouter=require('./home/homeRouter.js');
const mForestsRouter=require('./mForests/mForestsRouter.js');

//instance
const mTownRouter=express.Router();

mTownRouter.use(function (req, res, next){
    // if(req.session.username===undefined){return res.redirect('http://localhost:3000/');}
    // judge privileges here and render suitable mTown page to inhabitants.
    return next();
});

mTownRouter.get('/',function (req, res) {
    console.log(new Date()+':[inhabitant:'+req.session.username+'] is coming to mTown.');
    return res.render('./mTown/mTown.hbs',{title:'mTown',layout:'./layouts/blankLayout.hbs'});
});

mTownRouter.all('/',function (req, res) {
    console.log('Attention:illegal access!');
    return res.send('Sorry,your request is illegal.');
});

mTownRouter.use('/home',homeRouter);
mTownRouter.use('/mForests',mForestsRouter);

module.exports=mTownRouter;