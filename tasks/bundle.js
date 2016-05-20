var gulp = require('gulp');
var jspm = require('jspm');
var path = require('path');
var paths = require(path.join(process.env.PWD, 'config/paths.js'));
var jspmOpts = {
  sourceMaps: false,
  minify: true
};

gulp.task('bundle', () => {
  return jspm.bundle(paths.bundleSrc, paths.bundleDest, jspmOpts)
    .then(() => {
      return gulp.src(paths.configSrc)
        .pipe(gulp.dest(paths.configDest));
    }).catch(error => {
      console.log(error);
    });
});
