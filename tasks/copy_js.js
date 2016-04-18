var gulp = require('gulp')

gulp.task('copy_js', () => {
    return gulp.src('./src/app/**/*.js').pipe(gulp.dest('./app/'))
})
