"use strict";
var express = require('express');
var knex = require('knex');
var path = require('path');
var app = express();
var configPath = path.join(process.cwd(), 'config/config.json');
var config = require(configPath);
var pg = knex(
  {client: 'pg', connection: config.connection}
);

var env = process.env.NODE_ENV || 'development';

app.set('view engine', 'pug');
app.use(express.static(path.join(process.cwd(), '/app')));

if (env === 'production') {
  let pathRoot = path.join(process.cwd(), '/public');
  app.locals.prod = true;
  app.locals.dev = false;
  app.locals.basedir = pathRoot;
  app.use(express.static(pathRoot));
}

if (env === 'development') {
  console.log("running in development mode");
  let pathRoot = path.join(process.cwd(), '/src');
  app.locals.prod = false;
  app.locals.dev = true;
  app.locals.basedir = pathRoot;
  app.use(express.static(pathRoot));
}

app.get('/', (req, res) => {
  res.render('index');
  // res.sendFile(path.join(appPath, '/map.html'));
});

app.use('/options', require('./options.route.js'));
app.use('/layers', require('./layers.route.js')(pg));

app.listen(process.env.port || 8080, () => {
  console.log('listening on port ' + (process.env.port || 8080));
});
