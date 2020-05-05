//module required
const express=require('express');
const mTownRouter=require('./mTown/mTownRouter.js');
// const publicRouter=require('./publicRouter.js');
const db=require('../mysql/inhabitantsConnection.js');
// const session=require('express-session');

//instance of Router
const gateRouter=express.Router();

gateRouter.all('/',function (req, res, next){
    // if(req.session.username!==undefined){return res.redirect('http://localhost:3000/mTown');}
    return next();
});

gateRouter.get('/',function (req, res) {
    return res.render('./gate.hbs',{title:'Gate',layout:'./layouts/blankLayout.hbs'});
});

gateRouter.all('/',function(req, res,next) {
    if (req.method !== 'POST') {return next();}
    if (req.body.method === 'login') {
        const username=req.body.username;
        const password=req.body.password;
        db.query('select password from users where username = \''+username+'\' ;',function (results) {
            if(typeof (JSON.parse(JSON.stringify(results)).pop())!=='undefined'){
                let temp= JSON.parse(JSON.stringify(results)).pop().password;
                if(temp===password){
                    // req.locals={username:username};
                    req.session.username=username;
                    return res.send({status:'success'});
                    // next();
                }
                else if (temp!==password){return res.send({status:'password'});}
            }
            else {return res.send({status:'username'});}
        });
    }
    else if (req.body.method === 'register') {
        const username=req.body.username;
        const password=req.body.password;
        db.query('select * from users where username = \''+username+'\' ;',function (results) {
            if(typeof (JSON.parse(JSON.stringify(results)).pop())!=='undefined'){return res.send({status:'username'});}
            else {
                db.query('insert into users (username,password) values (\''+username+'\',\''+password+'\');');
                // req.locals={username:username};
                req.session.username=username;
                return res.send({status:'success'});
                // next();
            }
        });
    }
    else {return res.send('illegal access!');}
});

//忘了写来干啥的，好像是课程设计的时候没调好，尴尬啊，自己都忘了
// gateRouter.post('/',
//     session({
//         secret:'ppx',
//         cookie:{maxAge:30*60*1000},
//         resave:false,
//         saveUninitialized:true,
//     }),
//     function (req,res) {
//         req.session.username=req.locals.username;
//         console.log(req.session);
//         return res.send({status:'success'});
//     }
// );

gateRouter.all('/',function (req, res) {
    console.log('Attention:illegal access to gate!');
    return res.send('Sorry,your request is illegal.');
});

gateRouter.use('/mTown',mTownRouter);

module.exports=gateRouter;
