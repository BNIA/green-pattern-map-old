var gulp = require('gulp')
var jade = require('gulp-jade')

gulp.task('compile_jade', function(){
	return gulp.src('./src/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./client/'))
})
