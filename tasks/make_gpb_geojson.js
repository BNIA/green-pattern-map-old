var gulp = require('gulp')
var knex = require('knex')
var _ = require('lodash')
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

gulp.task('make_gpb_geojson',() => {
    var pg =  knex({client:'pg',connection:config.connection})
    return pg.schema.table('layers.gpb', (table) => {
        table.specificType('geojson','jsonb').defaultTo(null)
    })
    .then(() => {
        return pg.raw('UPDATE layers.gpb set geojson = ST_AsGeoJSON(geometry)::jsonb')
    })
    .then(() => {
        return pg.select().from('layers.gpb')
    })
    .map((row) => {
        if(_.isNil(row.geojson)){return null}
        var nRow = row.geojson
        var properties = _.pick(row,
            ['gid',
            'site_id',
            'gpb_type',
            'site_name',
            'site_address',
            'sw_siteuse',
            'cg_siteuse',
            'status',
            'pct_imp',
            'imp_acres',
            'retrofit_type',
            'bmp_type',
            'src',
            'block',
            'lot',
            'mg_type',
            'cg_siteuse',
            'data_year']
        )
        nRow = {
            type:"Feature",
            geometry:nRow,
            properties:properties
        }
        return pg('layers.gpb')
            .where('gid',row.gid)
            .update({geojson:JSON.stringify(nRow)})
    })
    .then(() => {
		return pg.destroy()
	})
})
