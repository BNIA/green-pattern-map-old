var gulp = require('gulp')
// var ts = require('gulp-typescript')
var exec = require('child-process-promise').exec
// var tsProject = ts.createProject(process.env.PWD + '/tsconfig_jspm.json')

gulp.task('compile_ts', () => {
	//var tsResult = tsProject.src(process.env.PWD + '/src/**/*.ts')
	//	.pipe(ts(tsProject))
	//return tsResult.js.pipe(gulp.dest('client'))
	return exec('tsc')
		.then(() => {},(error) => {console.error(error.stdout)})
})
