var gulp = require('gulp')

gulp.task('copy_js', () => {
    return gulp.src(['./src/app/**/*.js','./src/app/**/*js.map','./src/app/**/*.ts']).pipe(gulp.dest('./app/'))
})
