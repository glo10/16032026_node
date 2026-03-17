var path = require('path');
var express = require('express');
// on importe les dépendances dont Express a besoin dans son fonctionnement = middlewares
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// on importe les routes ici
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/news')

// on déclare une instance d'Express pour notre projet
var app = express();

// view engine setup
// const __dirname est globale et contient le dossier racine du projet
// On définit le dossier qui contient les vues (fichiers "html" qui seront générés dynamiquement (avec une data spécifique selon la requête))
app.set('views', path.join(__dirname, 'views'));
// On définit notre moteur de template (ejs dans ce cas précis)
app.set('view engine', 'ejs');

// Les appels aux différents middlewares d'Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// /public est statique => contenu identique pour tout le monde
// tout ce qui est dans public est accessible commence /
app.use(express.static(path.join(__dirname, 'public')));

// Lier les routes qu'on définit avec des chemins
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter)

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
