var gulp = require('gulp')
var knex = require('knex')
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

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