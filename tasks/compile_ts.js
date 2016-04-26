var gulp = require('gulp')
var exec = require('child-process-promise').exec
//var sourcemap = require('gulp-sourcemaps')

gulp.task('compile_ts', () => {
	return exec('tsc')
		.then(() => {},(error) => {console.log(error.stdout)})
})
