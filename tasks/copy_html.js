var gulp = require('gulp')

gulp.task('copy_html', () => {
    return gulp.src(['./src/**/*.html']).pipe(gulp.dest('./client/'))
})
