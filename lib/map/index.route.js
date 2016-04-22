var express = require('express')
var router = express.Router()

router.route('/')
    .get((req,res) => {
        res.render(__dirname + '/index.jade')
    })

module.exports = router
