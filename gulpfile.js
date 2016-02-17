var gulp = require('gulp')
var config = require('./config.json')							// User config
var Promise = require('bluebird')								// Promises 
var remoteSrc = require('gulp-remote-src')						// For downloading files
var decompress = require('gulp-decompress')						// For unzipping
var chmod = require('gulp-chmod')								// For permissions
var mkdirp = require('mkdirp')									// Make sure dir exists
var rename = require('gulp-rename')								// For renaming files
var exec = require('child-process-promise').exec
var jedit = require('gulp-json-editor')
var tidy = require('tidyaddr-js')
var fs = require('fs')
var csv = require('fast-csv')
var byline = require('byline')
var titleize = require('inflection').titleize
var knex = require('knex')								// For sql
var del = require('del')
var _ = require('lodash')

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

gulp.task('get_mdp_shape', function(){
	mkdirp.sync('data/layers/mdp')
	return remoteSrc(['b2c25wu2yszvqzw/mdp.zip?dl=1'],{
		base:"https://www.dropbox.com/s/",
		followAllRedirects:true
	})
	.pipe(decompress({'strip':1}))
	.pipe(chmod(755))
	.pipe(rename(function(path){
		path.basename = "layers"
	}))
	.pipe(gulp.dest('data/layers/mdp'))
})

/* load nsa shape to pg db */
gulp.task('load_csa_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "boundaries"').then(function(){
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

/* load nsa shape to pg db */
gulp.task('load_nsa_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "boundaries"').then(function(){
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
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "boundaries"').then(function(){
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

gulp.task('load_mdp_shape', function(){
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "layers"').then(function(){
		var filename = "data/layers/mdp/layers.shp"
		// convert ssid to 4326 from 2248
		var execStr = "shp2pgsql -s 26985:4326"					
		// name geo column "geometry"
		execStr += " -g geometry"
		// read shp file
		execStr += " " + filename
		execStr += " " + "layers.mdp"			
		// put it in sql file
		execStr += " > data/layers/mdp/layers.sql" 	
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
		execStr+= " -w -f data/layers/mdp/layers.sql"
		execStr+= " --quiet"
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

/* remove all non-essential columns from table */
gulp.task('prune_mdp_table', function(){
	var pg = knex({client:'pg',connection:config.connection})
	//get a list of all column_names that we don't want
	return pg.select('column_name')
	.from('information_schema.columns')
	.where('table_name','mdp')
	.where('table_schema','layers')
	.whereNotIn('column_name',['gid','address','zipcode','block','lot','geometry'])
	.then(function(columnNames){
		//remove all the columns that we don't want
		var query = "ALTER TABLE layers.mdp "
		_.forEach(_.rest(columnNames),function(c){
			query += " DROP \"" + c.column_name + "\","
		})
		query += " DROP \"" + columnNames[0].column_name  + "\";"
		return pg.raw(query)
	})
	.then(function(){
		return pg.destroy()
	})
})

gulp.task('tidy_mdp_table', function(){
	var pg = knex({client:'pg',connection:config.connection})
	return pg.schema.table('layers.mdp',function(table){
		table.text("orig_address")
	}).then(function(){
		return pg.raw("UPDATE layers.mdp SET orig_address = address")
	}).then(function(){
		return pg.select('gid','address')
		.from('layers.mdp')
		.map(function(row){
			if(row.address === null || row.address === undefined){
				row.address = ''
			}
			tAddress = tidy.cleanLine(row.address).tidyaddress
			if(tAddress !== null && tAddress !== undefined){
				tAddress = titleize(tAddress)
			}
			return pg('layers.mdp')
			.update({'address':tAddress})
			.where({'gid':row.gid})
		},function(error){
			console.log(row)
		})
	}).then(function(){
		return pg.destroy()
	})
})

gulp.task('match_mdp_to_csas', function(){
	var pg = knex({client:'pg',connection:config.connection})
	return pg.schema.table('layers.mdp', function(table){
		table.integer('csa_id').references("gid").inTable('boundaries.csas')
	})
	.then(function(){
		var query = "UPDATE layers.mdp a SET csa_id = b.gid from boundaries.csas b WHERE ST_Contains(b.geometry,a.geometry)"
		return pg.raw(query)
	})
	.then(function(){
		return pg.destroy()
	})
})

gulp.task('match_mdp_to_nsas', function(){
	var pg = knex({client:'pg',connection:config.connection})
	return pg.schema.table('layers.mdp', function(table){
		table.integer('nsa_id').references("gid").inTable('boundaries.nsas')
	})
	.then(function(){
		var query = "UPDATE layers.mdp a SET nsa_id = b.gid from boundaries.nsas b WHERE ST_Contains(b.geometry,a.geometry)"
		return pg.raw(query)
	})
	.then(function(){
		return pg.destroy()
	})
})

gulp.task('match_mdp_to_subwatersheds', function(){
	var pg = knex({client:'pg',connection:config.connection})
	return pg.schema.table('layers.mdp', function(table){
		table.integer('sws_id').references("gid").inTable('boundaries.subwatersheds')
	})
	.then(function(){
		var query = "UPDATE layers.mdp a SET sws_id = b.gid from boundaries.subwatersheds b WHERE ST_Contains(b.geometry,a.geometry)"
		return pg.raw(query)
	})
	.then(function(){
		return pg.destroy()
	})
})
