var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

gulp.task('match_mdp_to_sws', function(){
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