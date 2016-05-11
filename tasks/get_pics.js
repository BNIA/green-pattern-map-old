var gulp = require('gulp')
var remoteSrc = require('gulp-remote-src')
var decompress = require('gulp-decompress')
var chmod = require('gulp-chmod')
var mkdirp = require('mkdirp')									// Make sure dir exists

/* download & unzip csa shape */
gulp.task('get_pics', () => {
	mkdirp.sync('client/map/pics/cg')
	remoteSrc(['uc?export=download&id=0B9Vu5l7KieLJWEUtb29SOGljRmM'],{
		base:'https://drive.google.com/',
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(gulp.dest('app/pics/cg'))
})
