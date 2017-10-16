/**
 * Created by Eric on 2017/7/12.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();

    function validataUser(uloginname, urealname,uschool,ustudentid,umajor,uclasses,usex,uphone,uenroll,uedu, callback) {
        var connection =mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'123456',
            port:'3306',
            database:'test'
        });
        connection.connect();

        var sql = 'UPDATE  userinfos SET loginname = ? ,realname = ?, school=?,studentid=?,major=?,class=?,sex=?,phone=?,enrollmentYear=?,education=? WHERE id=25 ';
        var params = [uloginname, urealname,uschool,ustudentid,umajor,uclasses,usex,uphone,uenroll,uedu];
        connection.query(sql,params,function (err, result) {
            var updateRlt =true;
            if (err){
                updateRlt =false;
            }
            callback(updateRlt);
        });
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

        validataUser(uloginname, urealname,uschool,ustudentid,umajor,uclasses,usex,uphone,uenroll,uedu, function (updateResult) {
            if(updateResult){
                res.redirect('/userInfoShow');
                return;
            }
            res.redirect('/myerror2');
        })

    }
