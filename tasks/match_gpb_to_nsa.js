var gulp = require('gulp')
var knex = require('knex')
var path = require('path');
var configPath = path.join(process.cwd(),'config/config.json');
var config = require(configPath);

gulp.task('match_gpb_to_nsa', () => {
    var pg = knex({client:'pg',connection:config.connection})
    return pg.raw('UPDATE layers.gpb a SET nsa_id = b.gid from boundaries.nsas b where ST_CONTAINS(b.geometry,a.geometry)')
        .then(() => {
            return pg.raw('REINDEX INDEX layers.gpb_nsa_id')
        })
        .then(() => {
            return pg.destroy()
        })
})
