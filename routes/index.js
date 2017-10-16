var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        appName:'用户管理系统',
    });
});
router.get('/register', function(req, res, next) {
    res.render('register', {
        title: '用户注册系统',
    });
});
router.get('/login', function (req, res, next) {
    res.render('login',{

    })
})
router.get('/search',function (req, res, next) {
    res.render('search',{

    })
})
router.get('/message', function (req, res, next) {
    res.render('message',{

    })
})

router.get('/userInfoRegister', function (req, res, next) {
    res.render('userInfoRegister',{

    })
})
router.get('/taskShow', function (req, res, next) {
    res.render('taskShow',{

    })
})
router.get('/404', function (req, res, next) {
    res.render('404',{

    })
})


module.exports = router;

