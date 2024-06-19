const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const commentsRouter = require('./routes/comments');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
  secret: "proyectointegradorfinal",
  resave: false,
  saveUninitialized: true
}));
// Logueado
app.use(function (req, res, next) {
  console.log('Session Data:', req.session);
  if (req.session.usuarioLogueado != undefined) {
    res.locals.user = req.session.usuarioLogueado;
  }
  return next();
});

// Routes
app.use('/', indexRouter);
app.use('/profile', usersRouter);
app.use('/product', productsRouter);
app.use('/comments', commentsRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;