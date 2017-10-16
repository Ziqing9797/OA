/**
 * Created by Eric on 2017/7/4.
 */
module.exports = function (req ,res ,next) {
    res.render('myerror',{title:'登录失败'});
}