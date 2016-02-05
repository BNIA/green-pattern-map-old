var gulp = require('gulp')
var config = require('./config.json')							// User config
var Promise = require('bluebird')								// Promises 
var remoteSrc = require('gulp-remote-src')						// For downloading files
var decompress = require('gulp-decompress')						// For unzipping
var chmod = require('gulp-chmod')								// For permissions
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')								// For renaming files
var exec = require('child-process-promise').exec
var knex = require('knex')								// For sql

gulp.task('get_shape', ['get_nsa_shape','get_csa_shape','get_sws_shape'])

/* download & unzip nsa shape */
gulp.task('get_nsa_shape', function(){
	mkdirp.sync('data/boundaries/nsas')
	remoteSrc(['zip'],{
		base:"https://data.baltimorecity.gov/download/6jyd-xzp7/application/",
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "boundaries"
	}))
	.pipe(gulp.dest('data/boundaries/nsas'))
})

/* download & unzip csa shape */
gulp.task('get_csa_shape', function(){
	mkdirp.sync('data/boundaries/csas')
	remoteSrc(['zip'],{
		base:'https://data.baltimorecity.gov/download/uga5-5yms/application/',
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "boundaries"
	}))
	.pipe(gulp.dest('data/boundaries/csas'))
})

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

/* load nsa shape to pg db */
gulp.task('load_nsa_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "BOUNDARIES"').then(function(){
		var filename = "data/boundaries/nsas/boundaries.shp"
		// convert ssid to 4326 from 2248
		var execStr = "shp2pgsql -s 2248:4326"					
		// name geo column "geometry"
		execStr += " -g geometry"
		// read shp file
		// where to put it in db
		execStr += " " + boundaries.subwatersheds
		execStr += " " + filename								
		// where to put it in db
		execStr += " boundaries.nsas"
		// put it in sql file
		execStr += " > data/boundaries/nsas/boundaries.sql" 	
		// increase buffer to allow whole stdout read
		return exec(execStr)
	})
	.then(function(){
		// just doing it this way because file is so big
		var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/boundaries/nsas/boundaries.sql"
		return exec(execStr)
	})
	.then(function(){
		return pg.destroy()
	})
})

/* load nsa shape to pg db */
gulp.task('load_csa_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "BOUNDARIES"').then(function(){
		var filename = "data/boundaries/csas/boundaries.shp"
		// convert ssid to 4326 from 2248
		var execStr = "shp2pgsql -s 2248:4326"					
		// name geo column "geometry"
		execStr += " -g geometry"
		// read shp file
		execStr += " " + filename								
		// where to put it in db
		execStr += " boundaries.csas"
		// put it in sql file
		execStr += " > data/boundaries/csas/boundaries.sql" 	
		// increase buffer to allow whole stdout read
		return exec(execStr)
	})
	.then(function(){
		// just doing it this way because file is so big
		var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/boundaries/csas/boundaries.sql"
		return exec(execStr)
	})
	.then(function(){
		return pg.destroy()
	})
})

/* load subwatershed shape to pg db */
gulp.task('load_sws_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "BOUNDARIES"').then(function(){
		var filename = "data/boundaries/subwatersheds/boundaries.shp"
		// convert ssid to 4326 from 4326
		var execStr = "shp2pgsql -s 4326:4326"					
		// name geo column "geometry"
		execStr += " -g geometry"
		// read shp file
		execStr += " " + filename
		// where to put it in db
		execStr += " boundaries.subwatersheds"
		// put it in sql file
		execStr += " > data/boundaries/subwatersheds/boundaries.sql" 	
		// increase buffer to allow whole stdout read
		return exec(execStr)
	})
	.then(function(){
		// just doing it this way because file is so big
		var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/boundaries/subwatersheds/boundaries.sql"
		return exec(execStr)
	})
	.then(function(){
		return pg.destroy()
	})
})

/* remove all non-baltimore sws from pg table */
gulp.task('prune_sws_table', function(){
	var pg = knex({client:'pg',connection:config.connection})
	return pg('boundaries.subwatersheds')
	.whereNotIn('mde8digt',['02130903','02130901','02130904','02130905','02130906'])
	.del()
	.then(function(){
		return pg.destroy()
	})
})
