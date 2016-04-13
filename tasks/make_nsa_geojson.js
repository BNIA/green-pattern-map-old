var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

gulp.task('make_nsa_geojson', function(){
    var pg =  knex({client:'pg',connection:config.connection})
    return pg.schema.table('boundaries.nsas', (table) => {
        table.specificType('geojson','jsonb').defaultTo(null)
    })
    .then(() => {
        return pg.raw('UPDATE boundaries.nsas set geojson = ST_AsGeoJSON(geometry)::jsonb')
    })
    .then(function(){
		return pg.destroy()
	})
})
