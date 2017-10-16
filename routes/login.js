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

    var sql ='select * from userInfodb where loginname=? and passwd=?';
    var params = [uname,upwd];
    console.log('username:',uname);
    console.log('userpassword:',upwd);
    connection.query(sql,params,function (error,result) {
        var loginRlt = false;
        if (result.length==1){
            loginRlt =true;
        }
        callback(loginRlt);
    })
}

module.exports = function (req, res, next) {
    console.log('enter login module');
    var username = req.body.uname;
    var userpassword = req.body.upwd;
    validataUser(username, userpassword, function (loginResult) {
        if(loginResult){
            res.redirect('/search');
            return;
        }
        res.redirect('/login');
    })

}