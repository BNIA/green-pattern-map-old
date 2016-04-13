var gulp = require('gulp')
var knex = require('knex')
var exec = require('child-process-promise').exec
var config = require('../config.json')
var pg = null

gulp.task('create_db',() => {
    var execStr = "export PGPASSWORD='" + config.connection.password + "'; "
    execStr+= " createdb " + config.connection.database
    execStr+= " -T template0"
    execStr+= " -E utf8"
    execStr+= " -h " + config.connection.host
    execStr+= " -U " + config.connection.user
    execStr+= " -O " + config.connection.user
    execStr+= " -p " + config.connection.port
    return exec(execStr)
        .then(() => {
            pg = knex({client:'pg',connection:config.connection})
            return pg.raw('CREATE EXTENSION postgis')
        }).then(() => {
            return pg.destroy()
        })
})
