var express = require('express');
var path = require('path');
var app = express();
var locals = {};

var env = process.env.NODE_ENV || 'development';

app.set('view engine', 'pug');
app.use(express.static(path.join(process.env.PWD, '/app')));

if (env === 'production') {
  locals = {prod: true, dev: false};
}

if (env === 'development') {
  locals = {prod: false, dev: true};
}

app.get('/', (req, res) => {
  res.render('app', locals);
  // res.sendFile(path.join(appPath, '/map.html'));
});

app.listen(process.env.port || 8080, () => {
  console.log('listening on port ' + (process.env.port || 8080));
});
