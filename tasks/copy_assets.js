var gulp = require('gulp')

gulp.task('copy_assets', () => {
    return gulp.src(['./src/**/assets/*']).pipe(gulp.dest('./client'))
})
