var gulp = require('gulp')
var knex = require('knex')
var tidy = require('tidyaddr-js')
var titleize = require('inflection').titleize
var config = require('../config.json')


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
		})
	}).then(function(){
		return pg.destroy()
	})
})