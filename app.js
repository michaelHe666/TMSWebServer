//list for required npm modules
const express=require('express');
const path=require('path');
const hbs=require('hbs');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const bodyParser=require('body-parser');

//instance node.js APP using
const app=express();

//list for appLocal.This shall be in MYSQL later as a view or table.!!!!!!Attention!!!!
// app.locals.name='mTown';
// app.locals.developer='michael';

//list for routers
const gateRouter=require('./routers/gateRouter.js');
const testRouter=require('./routers/testRouter.js');

//list for app settings
app.use(express.static(path.join(__dirname,'public')));

//list for app parsing request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
    secret:'ppx',
    cookie:{maxAge:30*60*1000},
    resave:false,
    saveUninitialized:true,
    rolling:10*60*1000,
}));

//list for routers
app.use('/',gateRouter);
app.use('/test',testRouter);

//listening port
app.listen(3000);

//page views parsing engine
app.set('view engine',hbs);

//hbs partials
hbs.registerPartials('views/partials/');
hbs.registerPartials('views/partials/cards');
hbs.registerPartials('views/partials/functionBalls');
hbs.registerPartials('views/partials/logos');

//helpers for extend block transfer in hbs documents
let blocks = {};
hbs.registerHelper('extend', function (name, content) {
    let block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(content.fn(this));
});

hbs.registerHelper('block', function (name) {
    let val = (blocks[name] || []).join('\n');
    blocks[name] = [];
    return val;
});

module.exports.useApp=app;