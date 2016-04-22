var express = require('express')
var router = express.Router()
var indexRoute = require('./landing/index.route')

router.use('/',indexRoute)

module.exports = router
