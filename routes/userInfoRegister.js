/**
 * Created by Eric on 2017/7/12.
 */
/**
 * Created by Eric on 2017/7/4.
 */
var mysql = require('mysql');

function validataUser(loginname,realname,school,studentid,major,uclass,sex,phone,enrollmentYear,education ,callback) {
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'test'
    });
    connection.connect();
    var  sql = 'INSERT INTO userinfos(id,loginname,realname,school,studentid,' +
        'major,class,sex,phone,enrollmentYear,education) VALUES(0,?,?,?,?,?,?,?,?,?,?)';
    var params = [loginname,realname,school,studentid,major,uclass,sex,phone,enrollmentYear,education];
    connection.query(sql,params,function (error,result) {
        var loginRlt =true;
        if (error||result==null){
            loginRlt =false;
        }
        callback(loginRlt);
    })
}

module.exports = function (req, res, next) {
    var uloginname=req.body.loginname;
    var urealname =req.body.realname;
    var uschool =req.body.school;
    var ustudentid =req.body.studentid;
    var umajor =req.body.major;
    var uclasses =req.body.uclass;
    var usex =req.body.sex;
    var uphone =req.body.phone;
    var uenroll =req.body.enrollmentYear;
    var uedu =req.body.education;

    validataUser(uloginname, urealname,uschool,ustudentid,umajor,uclasses,usex,uphone,uenroll,uedu, function (loginResult) {
        if(loginResult){
            res.redirect('/userInfoShow');
            return;
        }
        res.redirect('/myerror2');
    })

}