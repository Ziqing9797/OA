/**
 * Created by Eric on 2017/7/4.
 */
var mysql = require('mysql');

function validataUser(uname , upwd ,callback) {
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'test'
    });
    connection.connect();

    var  sql = 'INSERT INTO userInfodb(id,loginname,passwd) VALUES(0,?,?)';
    var params = [uname,upwd];
    connection.query(sql,params,function (error,result) {
        var loginRlt =true;
        if (error||result==null){
            loginRlt =false;
        }
        callback(loginRlt);
    })
}

module.exports = function (req, res, next) {
    var username = req.body.uname;
    var userpassword = req.body.upwd;

    validataUser(username, userpassword, function (loginResult) {
        if(loginResult){
            res.redirect('/info');
            return;
        }
        res.redirect('/myerror2');
    })

}