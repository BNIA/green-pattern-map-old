var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

/* load nsa shape to pg db */
gulp.task('load_vs_sections', () => {
	var pg = knex({client:'pg',connection:config.connection})
	// Make sure that boundaries schema exists
	return pg.raw('CREATE SCHEMA IF NOT EXISTS "vital_signs"')
	.then(() => {
		// just doing it this way because file is so big
var execStr = "";
var isWin = (os.platform() === 'win32');
if(isWin) {
  execStr = "SET PGPASSWORD=" + config.connection.password;
} else {
  var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
}
		execStr+= " psql -h " + config.connection.host
		execStr+= " -U " + config.connection.user
		execStr+= " -p " + config.connection.port
		execStr+= " -d " + config.connection.database
		execStr+= " -w -f data/meta/vs/sections.sql"
		return exec(execStr)
	})
	.then(() => {
		return pg.destroy()
	})
})
