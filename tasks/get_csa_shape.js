var gulp = require('gulp')
var remoteSrc = require('gulp-remote-src')
var decompress = require('gulp-decompress')
var chmod = require('gulp-chmod')
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')

/* download & unzip csa shape */
gulp.task('get_csa_shape', function(){
	mkdirp.sync('src/data/boundaries/csas')
	remoteSrc(['zip'],{
		base:'https://data.baltimorecity.gov/download/uga5-5yms/application/',
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "boundaries"
	}))
	.pipe(gulp.dest('src/data/boundaries/csas'))
})