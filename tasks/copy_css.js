var gulp = require('gulp')

gulp.task('copy_css', () => {
    return gulp.src(['./src/**/*.css']).pipe(gulp.dest('./client'))
})
