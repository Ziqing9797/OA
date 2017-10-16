var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');

var userInfoShow =require('./routes/userInfoShow')//zzq添加
var userInfoModify =require('./routes/userInfoModify')//zzq添加
var userInfoModify1 =require('./routes/userInfoModify1')//zzq添加
var userInfoReg=require('./routes/userInfoRegister');
var deleteUser = require('./routes/deleteUser')
var login =require('./routes/login');
var register=require('./routes/register');
var myerror = require('./routes/myerror');
var myerror2 = require('./routes/myerror2');
var file =require('./routes/file');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/userInfoShow',userInfoShow);
app.use('/userInfoModify',userInfoModify);
app.use('/userInfoModify1',userInfoModify1);
app.use('/userInfoReg',userInfoReg);
app.use('/deleteUser',deleteUser);
app.use('/login',login);
app.use('/register',register)
app.use('/myerror',myerror)
app.use('/myerror2',myerror2)
//app.use('/search',search)
app.use('/',file)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
