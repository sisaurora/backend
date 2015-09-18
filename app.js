var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var    conf     = require('./lib/conf');
var    ejwt     = require('express-jwt');
var    routes = require('./routes/index');
var    users  = require('./routes/users');
var passport = require('passport');

//
var jwtCheck = ejwt({
  secret: conf.secret
});

var app = express();
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
//app.use('/users*', jwtCheck);
app.use('/users', users);
//app.use('/users', users, jwtCheck);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found')
    .status = 404;
    next(err);
});

// error handler no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
    res.status(err.status || 500).send('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});


module.exports = app;
