module.exports = (pg) => {
    var options = require('./options.json')
    var express = require('express')
    var router = express.Router()
    var indexRoute = require('./map/index.route')
    var layersRoute = require('./map/layers.route')
    var optionsRoute = require('./map/options.route')

    router.use('/',indexRoute)
    router.use('/layers',layersRoute(pg))
    router.use('/options',optionsRoute(options))

    return router
}
