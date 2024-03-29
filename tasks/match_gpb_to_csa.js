var gulp = require('gulp')
var knex = require('knex')
var config = require('../config.json')

gulp.task('match_gpb_to_csa', () => {
    var pg = knex({client:'pg',connection:config.connection})
    return pg.raw('UPDATE layers.gpb a SET csa_id = b.gid from boundaries.csas b where ST_CONTAINS(b.geometry,a.geometry)')
        .then(() => {
            return pg.raw('REINDEX INDEX layers.gpb_csa_id')
        })
        .then(() => {
            return pg.destroy()
        })
})
