var gulp = require('gulp')
var remoteSrc = require('gulp-remote-src')
var decompress = require('gulp-decompress')
var chmod = require('gulp-chmod')
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')

gulp.task('get_mdp_shape', function(){
	mkdirp.sync('src/data/layers/mdp')
	return remoteSrc(['b2c25wu2yszvqzw/mdp.zip?dl=1'],{
		base:"https://www.dropbox.com/s/",
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "layers"
	}))
	.pipe(gulp.dest('src/data/layers/mdp'))
})