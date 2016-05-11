module.exports = (options) => {
    var express = require('express')
    var router = express.Router()

    router.route('/layer_filters')
        .get((req,res) => {
            res.json(options.layerFilters)
        })
    router.route('/boundary_choices')
        .get((req,res) => {
            res.json(options.boundaryChoices)
        })
    return router
}
