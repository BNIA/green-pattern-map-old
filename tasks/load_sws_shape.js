var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var config = require('../config.json')

/* load subwatershed shape to pg db */
gulp.task('load_sws_shape', () => {
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "boundaries"').then(() => {
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
	.then(() => {
		// just doing it this way because file is so big
		var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/boundaries/subwatersheds/boundaries.sql"
		return exec(execStr)
	})
	.then(() => {
		return pg.destroy()
	})
})
