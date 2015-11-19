var gulp = require('gulp');
var myPath = require("../../paths.js");

gulp.task('test', function(){
  console.log("test_download cwd" + process.cwd());
  console.log(myPath);
});
