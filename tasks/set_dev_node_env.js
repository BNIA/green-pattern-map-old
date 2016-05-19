var gulp = require('gulp');
var env = require('gulp-env');

gulp.task('set_dev_node_env', () => {
  env({
    file: './.env-dev.json'
  });
});
