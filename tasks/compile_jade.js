var gulp = require('gulp')
var jade = require('gulp-jade')

gulp.task('compile_jade', () => {
	return gulp.src('./src/app/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./app/'))
})
