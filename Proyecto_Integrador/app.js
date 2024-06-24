const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const commentsRouter = require('./routes/comments');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
  saveUninitialized: false
}));

// Middleware to add logged user to locals
app.use((req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user;
} else {
    res.locals.user = null;
} 
next();
});

// Routes
app.use('/', indexRouter); 
app.use('/profile', usersRouter);
app.use('/product', productsRouter);
app.use('/comments', commentsRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;