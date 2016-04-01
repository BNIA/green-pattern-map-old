var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

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