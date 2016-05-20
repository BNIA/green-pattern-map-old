var gulp = require('gulp')
var knex = require('knex')
var path = require('path');
var configPath = path.join(process.env.PWD,'config/config.json');
var config = require(configPath);

gulp.task('make_sws_geojson', function(){
    var pg =  knex({client:'pg',connection:config.connection})
    return pg.schema.table('boundaries.subwatersheds', (table) => {
        table.specificType('geojson','jsonb').defaultTo(null)
    })
    .then(() => {
        return pg.raw(
            'UPDATE boundaries.subwatersheds set geojson = ' +
            'jsonb_set(' +
                'ST_AsGeoJSON(geometry)::jsonb,' +
                "'{properties}'," +
                "('{\"name\":\"'||mde8name||'\"}')::jsonb," +
                "true" +
            ')'
        )
    })
    .then(function(){
		return pg.destroy()
	})
})
