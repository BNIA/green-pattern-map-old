var gulp = require('gulp')
var exec = require('child-process-promise').exec
//var sourcemap = require('gulp-sourcemaps')

gulp.task('compile_ts', () => {
// 	var tsProject = tsc.createProject('./tsconfig.json')
// //	var sourceTsFiles = ['./src/**/*.ts','./typings/main/**/*.d.ts']
//
// 	var toResult = tsProject
// 		.src('./src/app/**/*.ts') //sourceTsFiles
// //		.pipe(sourcemap.init())
// 		.pipe(tsc(tsProject))
//
// 	return toResult.js
// //		.pipe(sourcemap.write('.'))
// 		.pipe(gulp.dest('./client/app/'));
	return exec('tsc')
})
