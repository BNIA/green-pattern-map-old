var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

gulp.task('match_mdp_to_nsa', function(){
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