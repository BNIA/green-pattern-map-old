var gulp = require('gulp')

gulp.task('copy_assets', () => {
    return gulp.src(['./src/landing/assets/*', './src/map/assets/*']).pipe(gulp.dest('./client'))
})