var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

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