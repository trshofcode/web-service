var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var beritaRouter = require('./routes/berita');
var infoRouter = require('./routes/info');
var akunRouter = require('./routes/akun');
var jadwalRouter = require('./routes/jadwal');
var videoRouter = require('./routes/video');
var tiketRouter = require('./routes/tiket');
var orderRouter = require('./routes/order');
var eventRouter = require('./routes/event');

var app = express();

//cors
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/berita', beritaRouter);
app.use('/info', infoRouter);
app.use('/jadwal', jadwalRouter);
app.use('/tiket', tiketRouter);
app.use('/video', videoRouter);
app.use('/akun', akunRouter);
app.use('/event', eventRouter);
app.use('/order', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
