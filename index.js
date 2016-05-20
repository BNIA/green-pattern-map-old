var express = require('express');
var path = require('path');
var app = express();
var locals = {};

var env = process.env.NODE_ENV || 'development';

app.set('view engine', 'pug');
app.use(express.static(path.join(process.env.PWD, '/app')));

if (env === 'production') {
  console.log("running in production mode");
  locals = {prod: true, dev: false};
  app.use(express.static(path.join(process.env.PWD, '/public')));
}

if (env === 'development') {
  console.log("running in development mode");
  locals = {prod: false, dev: true};
  app.use(express.static(path.join(process.env.PWD, '/src')));
}

app.get('/', (req, res) => {
  res.render('app', locals);
  // res.sendFile(path.join(appPath, '/map.html'));
});

app.listen(process.env.port || 8080, () => {
  console.log('listening on port ' + (process.env.port || 8080));
});
