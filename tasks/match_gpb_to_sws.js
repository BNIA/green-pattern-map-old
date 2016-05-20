var gulp = require('gulp')
var knex = require('knex')
var path = require('path');
var configPath = path.join(process.env.PWD,'config/config.json');
var config = require(configPath);

gulp.task('match_gpb_to_sws', () => {
    var pg = knex({client:'pg',connection:config.connection})
    return pg.raw('UPDATE layers.gpb a SET sws_id = b.gid from boundaries.subwatersheds b where ST_CONTAINS(b.geometry,a.geometry)')
        .then(() => {
            return pg.raw('REINDEX INDEX layers.gpb_sws_id')
        })
        .then(() => {
            return pg.destroy()
        })
})
