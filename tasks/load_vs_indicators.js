var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var config = require('../config.json')

/* load nsa shape to pg db */
gulp.task('load_vs_indicators', () => {
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "vital_signs"')
	.then(() => {
		// just doing it this way because file is so big
		var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/meta/vs/indicators.sql"
		return exec(execStr)
	})
	.then(() => {
		return pg.schema.table('vital_signs.indicators', table => {
			table.float('break_l1',20)
			table.float('break_r1',20)
			table.float('break_l2',20)
			table.float('break_r2',20)
			table.float('break_l3',20)
			table.float('break_r3',20)
			table.float('break_l4',20)
			table.float('break_r4',20)
			table.float('break_l5',20)
			table.float('break_r5',20)
		})
	})
	.then(() => {return pg.destroy()})
})
