var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')

gulp.task('compile_less', function(){
	return gulp.src('./src/css/*.less')
	.pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./app/public/css'));
})