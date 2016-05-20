var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var paths = require(path.join(process.env.PWD, 'config/paths.js'));

gulp.task('compile_less', () => {
  return gulp.src(paths.lessSrc)
    .pipe(less({}))
    .pipe(gulp.dest(paths.lessDest));
});
