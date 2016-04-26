var gulp = require('gulp')

gulp.task('copy_html', () => {
    return gulp.src(['./src/app/**/*.html']).pipe(gulp.dest('./app/'))
})
