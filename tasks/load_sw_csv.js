var gulp = require('gulp')
var knex = require('knex')
var csv = require('fast-csv')
var fs = require('fs')
var Promise = require('bluebird')
var _ = require('lodash')
var changeCase = require('case')
var tidy = require('tidyaddr-js')
var config = require('../config.json')
var pg = null

gulp.task('load_sw_csv', () => {
    pg = knex({client:'pg',connection:config.connection})
    // Make sure that boundaries schema exists
    return pg.raw('CREATE SCHEMA IF NOT EXISTS "layers"').then(() => {
        var filename = "src/data/layers/sw/sw_types.csv"
        var arr = []
        var p = Promise.defer()
        var stream = fs.createReadStream(filename)
        var csvStream = csv().on("data", (data) => {
            arr.push(data)
        })
        .on("end",() => {
            var types = _.zipObject(arr[0],arr[1])
            p.resolve(types)
        })
        stream.pipe(csvStream)
        return p.promise
    })
    .then((types) => {
        var filename = "src/data/layers/sw/sw13.csv"
        var arr = []
        var p = Promise.defer()
        var stream = fs.createReadStream(filename)
        var csvStream = csv().on("data", (data) => {
            arr.push(data)
        })
        .on("end",() => {
            var header = arr[0]
            var rows = _.tail(arr)
            var objs = _.map(rows,(r) => {
                r = _.map(r,(s) => {
                    if(s === 'TRUE'){return true}
                    if(s === 'FALSE'){return false}
                    if(s === ''){return null}
                    if(_.isNil(s)){return null}
                    return s
                })
                while(r.length < header.length){
                    r.push(null)
                }
                var zipped = _.zipObject(header,r)
                zipped['data_year'] = '2013'
                return zipped
            })
            p.resolve({types:types,'sw':objs})
        })
        stream.pipe(csvStream)
        return p.promise
    })
    .then((obj) =>{
        obj.types['data_year'] = 'text'
		var sw = obj.sw
        sw = _.map(sw,(ret) => {
            ret['address'] = tidy.cleanLine(ret.address).tidyaddress
            _.forEach(_.toPairs(obj.types),(kv) => {
                if(kv[1] === 'text'){
                    if(!(_.isNil(kv[0]))){
                        ret[kv[0]] = changeCase.title(ret[kv[0]])
                    }
                }
                if(ret[kv[0]] == ''){ret[kv[0]] = null}
            })
            return ret
        })

        return {types:obj.types,sw:sw}
    })
    .then((obj) => {
        return pg.schema.createTableIfNotExists('layers.sw',(table) => {
            table.increments('gid').primary()
            _.forIn(obj.types,(v,k) => {
                if(k === 'site_id'){
                    table.text(k).unique()
                    return
                }
                if(v === 'text'){table.text(k)}
                if(v === 'float'){table.float(k)}
                if(v === 'boolean'){table.boolean(k)}
                if(v === 'integer'){table.integer(k)}
            })
        }).then(() => {
            return obj.sw
        })
    }).then((sw) => {
        return pg.raw('alter table layers.sw add column geometry geometry(Point,4326)')
            .then(() => {
                return sw
            })
    }).then((sw) => {
        return pg('layers.sw').insert(sw)
    }).then(() => {
        return pg.raw('update layers.sw set geometry = ST_SetSRID(ST_MakePoint(point_x,point_y),4326)')
    }).then(() => {
        return pg.destroy()
    })
})
