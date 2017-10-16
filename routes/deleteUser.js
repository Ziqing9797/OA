/**
 * Created by Eric on 2017/7/4.
 */
var mysql =require('mysql')

function deleteDataFromDB(id,callback){
    var connection =mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        port:'3306',
        database:'test'
    });
    connection.connect();
    console.log("开始查询")
    var sql = 'delete from userinfos where id=' + id;
    console.log(sql);
    connection.query(sql,function(err,result) {
        if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
        }
        //将结果值传递过去
       callback();
    });
    // connection.end();
}

module.exports = function (req, res, next) {
    var dUserID = req.query.userid;
   // console.log("要删除的ID："+dUserID);
    //获取数据库的查询结果
    deleteDataFromDB(dUserID,function (){
        var  contentValue = "用户"+dUserID+"已被删除";
        /*res.render('deleteRlt',{
            content:contentValue
        });*/
        res.redirect('/info');//相当于刷新该页面
    });
}