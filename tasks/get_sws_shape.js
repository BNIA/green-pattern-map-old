var gulp = require('gulp')
var remoteSrc = require('gulp-remote-src')
var decompress = require('gulp-decompress')
var chmod = require('gulp-chmod')
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')

/* download & unzip subwatershed shape */
gulp.task('get_sws_shape', function(){
	mkdirp.sync('data/boundaries/subwatersheds')
	remoteSrc(['e9j9-vuxg?method=export&format=Shapefile'],{
		base:"https://data.maryland.gov/api/geospatial/",
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "boundaries"
	}))
	.pipe(gulp.dest('data/boundaries/subwatersheds'))
})