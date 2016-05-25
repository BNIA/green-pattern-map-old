var path = require('path');
var pwd = process.env.PWD;

var productionRoot = path.join(pwd, '/public');
var developmentRoot = path.join(pwd, '/src');

exports.productionRoot = productionRoot;
exports.developmentRoot = developmentRoot;

exports.bundleSrc = 'main';
exports.bundleDest = path.join(productionRoot, '/build.js');

exports.configSrc = path.join(developmentRoot, '/config.js');
exports.configDest = productionRoot;

exports.lessSrc = path.join(developmentRoot, '/**/*.less');
exports.lessDest = developmentRoot;
