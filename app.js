var express = require('express');//引入express框架
var path = require('path');//引入path模块
var favicon = require('serve-favicon');//引入favicon模块
var logger = require('morgan');//引入日志模块
var cookieParser = require('cookie-parser');//cookie格式化
var bodyParser = require('body-parser');//form表单数据格式化

// 路由模块
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 使用插件模块
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 使用自定义路由模块
app.use('/', index);
app.use('/users', users);
app.use('/admin/rows',require('./routes/admin/admin_row'))

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
