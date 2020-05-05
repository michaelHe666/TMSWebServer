const mysql=require('mysql');

let pool=mysql.createPool({
    host:'localhost',
    user:'m1users',
    password:'@micheck',
    database:'m1',
    port:3306
});

exports.query=function (sql,callback) {
    pool.getConnection(function (err,connection) {
        if(err){
            throw err;
        }
        else{
            connection.query(sql,function (error,results,fields) {
                connection.release();
                if(error){throw error;}
                if(callback){callback(results,fields);}
            })
        }
    })
};