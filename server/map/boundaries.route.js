var _ = require('lodash')

module.exports = (pg) => {
    var express = require('express')
    var router = express.Router()
    router.use(require('body-parser').json())
    router.post('/',(req,res) => {
        var none_bc = _.find(req.body,{'key':'none_bc'})
        var csas = _.find(req.body,{'key':'csas'})
        var nsas = _.find(req.body,{'key':'nsas'})
        var subwatersheds = _.find(req.body,{'key':'subwatersheds'})
        if(none_bc.isOn){
            return res.json([])
        }
        else if(csas.isOn){
            pg.select('geojson').from('boundaries.csas')
                .map((row) => {
                    return row['geojson']
                })
                .then((geojson) => {
                    return res.json(geojson)
                })
        }
        else if(nsas.isOn){
            pg.select('geojson').from('boundaries.nsas')
                .map((row) => {
                    return row['geojson']
                })
                .then((geojson) => {
                    return res.json(geojson)
                })
        }
        else if(subwatersheds.isOn){
            pg.select('geojson').from('boundaries.subwatersheds')
                .map((row) => {
                    return row['geojson']
                })
                .then((geojson) => {
                    return res.json(geojson)
                })
        }
    })
    return router
}
