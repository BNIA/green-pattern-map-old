var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

/* load nsa shape to pg db */
gulp.task('load_vs_data', () => {
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
		execStr+= " -w -f data/meta/vs/data.sql"
		return exec(execStr)
	})
    .then(() => {
        return pg.schema.renameTable('vital_signs.data2','data')
    })
	.then(() => {
		return pg.schema.table('vital_signs.data',(table) => {
			table.integer('csa_id')
		})
	})
	.then(() => {
		return pg.raw('UPDATE vital_signs.data SET csa_id = csas.gid from boundaries.csas where data.csa = csas.csa')
	})
	.then(() => {
		return pg.destroy()
	})
})
