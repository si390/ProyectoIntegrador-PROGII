var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var commentsRouter = require('./routes/comments');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( { 
  secret: "ProyectoIntegrador",
	resave: false,
	saveUninitialized: true 
}));
app.use(function(req,res,next){
  res.locals.newUser = req.session.newUser;
  return next();
})
app.use(function(req, res, next) {
	if (req.session.newUser != undefined) {
		res.locals.newUser = req.session.newUser
     }
return next();
});
// Usar nombre de usuario
app.use(function (req,res,next) {
  if(req.session.usuarioLogueado != undefined){
    res.locals.user =req.session.usuarioLogueado
  }
  return next();
})

app.use('/', indexRouter);
app.use('/profile', usersRouter);
app.use('/product', productsRouter);
app.use('/comments', commentsRouter);

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

// Usar nombre de usuario
app.use(function (req,res,next) {
  res.locals.usuarioLogueado ={     /*si el usuario esta logueado y si no esta logueado, con la cookie*/
    
  }
  return next();
})


module.exports = app;
