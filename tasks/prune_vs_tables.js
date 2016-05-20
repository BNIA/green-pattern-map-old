var gulp = require('gulp')
var knex = require('knex')
var path = require('path');
var configPath = path.join(process.env.PWD,'config/config.json');
var config = require(configPath);

/* remove all non-baltimore sws from pg table */
gulp.task('prune_vs_tables',() => {
	var pg = knex({client:'pg',connection:config.connection})
	return pg('vital_signs.data')
	.whereNotIn('update_data_year',['2014'])
	.del()
	.then(() => {
		return pg('vital_signs.data')
		.whereNotIn('data_year',['2014'])
		.del()
	})
	.then(() => {
		return pg.schema.table('vital_signs.data',(table) =>{
			table.dropColumn('data_year')
			table.dropColumn('update_data_year')
		})
	})
	.then(() => {
		return pg.destroy()
	})
})
