var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var config = require('../config.json')

gulp.task('load_mdp_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "layers"').then(function(){
		var filename = "src/data/layers/mdp/layers.shp"
		// convert ssid to 4326 from 2248
		var execStr = "shp2pgsql -s 26985:4326"					
		// name geo column "geometry"
		execStr += " -g geometry"
		// read shp file
		execStr += " " + filename
		execStr += " " + "layers.mdp"			
		// put it in sql file
		execStr += " > src/data/layers/mdp/layers.sql" 	
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
		execStr+= " -w -f src/data/layers/mdp/layers.sql"
		execStr+= " --quiet"
		return exec(execStr)
	})
	.then(function(){
		return pg.destroy()
	})
})