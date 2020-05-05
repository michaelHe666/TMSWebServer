const express=require('express');
const testRouter=express.Router();
const db=require('../mysql/inhabitantsConnection.js');

let pps=null;

testRouter.use(function (req,res,next) {
   db.query('select * from users where username=\'hellomichael\';',function(results,fields){
       pps=JSON.stringify(results);
       let ppx=JSON.parse(pps);
       let ppf=ppx.pop();
       console.log(ppf.password);
   });
   next();
});

testRouter.get('/',function (req,res) {
    res.render('test/test.hbs',{ title:'Test',layout:'test/testLayout.hbs' });
    // res.send('ppx');
});

module.exports=testRouter;