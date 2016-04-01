var gulp = require('gulp')
var remoteSrc = require('gulp-remote-src')
var decompress = require('gulp-decompress')
var chmod = require('gulp-chmod')
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')

/* download & unzip nsa shape */
gulp.task('get_nsa_shape', function(){
	mkdirp.sync('src/data/boundaries/nsas')
	remoteSrc(['zip'],{
		base:"https://data.baltimorecity.gov/download/6jyd-xzp7/application/",
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "boundaries"
	}))
	.pipe(gulp.dest('src/data/boundaries/nsas'))
})