/**
 * Created by Eric on 2017/7/4.
 */
var mysql =require('mysql');

//从数据中获取信息
function getDataFromDB(queryCallback){
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'test'
    });
    connection.connect();
    console.log("开始查询")
    var querySql = 'select * from userinfos';
    connection.query(querySql,function(err,result,fields) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        //将结果值传递过去
        queryCallback(result);
    });
    // connection.end();
}

module.exports = function (req, res, next) {
    console.log("进入路由回掉");
    //获取数据库的查询结果
    getDataFromDB(function (result) {
        res.render('userInfoShow',{
            queryRlt:result
        });
    });
}