var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')

gulp.task('compile_less', () => {
	return gulp.src('./src/app/**/*.less')
	.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/'));
})
