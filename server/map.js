module.exports = pg => {
    var options = require('./options.json')
    var express = require('express')
    var router = new express.Router()

    //routes
    router.use('/',require('./map/index.route'))
    router.use('/layers',require('./map/layers.route')(pg))
    router.use('/options',require('./map/options.route')(options))

    return router
}
