module.exports = (options) => {
    var express = require('express')
    var router = express.Router()

    router.route('/')
        .get((req,res) => {
            res.json(options)
        })
    return router
}
