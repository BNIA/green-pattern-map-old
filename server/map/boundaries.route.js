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
            var vsOn = _.find(csas.configs[0].opt,{isOn:true})
            if(vsOn){
                pg.select('geojson')
                    .select(pg.raw('colors.' + vsOn.key + " as color"))
                    .select(pg.raw('data.' + vsOn.key + " as val"))
                    .from('boundaries.csas')
                    .leftJoin('vital_signs.colors','colors.csa_id','csas.gid')
                    .leftJoin('vital_signs.data','data.csa_id','csas.gid')
                    .map(row => {
                        row.geojson.properties.color = row.color
                        row.geojson.properties.val = row.val
                        return row.geojson
                    })
                    .then((geojson) => {
                        return res.json(geojson)
                    })
            }
            else{
                pg.select('geojson').from('boundaries.csas')
                    .map((row) => {
                        return row['geojson']
                    })
                    .then((geojson) => {
                        console.log(geojson)
                        return res.json(geojson)
                    })
            }
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
