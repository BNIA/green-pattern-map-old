var gulp = require('gulp')

gulp.task('copy_js', () => {
    return gulp.src('./src/**/*.js').pipe(gulp.dest('./app/'))
})
