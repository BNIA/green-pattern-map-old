var gulp = require('gulp');

gulp.task('set_prod_node_env', () => {
  process.env.NODE_ENV = 'production';
  return;
});
