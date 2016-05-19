var express = require('express');
var path = require('path');
var app = express();
var env = {};

/* Configuring for different environemts */
if (app.get('env') === 'development') {
  env = require(path.join(process.env.PWD, '/.env-dev.json'));
} else if (app.get('env') === 'production') {
  env = require(path.json(process.env.PWD, '/.env-prod.json'));
}

var appPath = path.join(process.env.PWD, env.APPD);
var libPath = path.join(process.env.PWD, env.LIBD);

app.set('view engine', 'pug');

app.use(express.static(appPath));
app.use('/jspm_packages', express.static(libPath));

app.get('/', (req, res) => {
  // res.render('index', {});
  res.sendFile(path.join(appPath, '/map.html'));
});

app.listen(process.env.port || 8080, () => {
  console.log('listening on port ' + (process.env.port || 8080));
});
