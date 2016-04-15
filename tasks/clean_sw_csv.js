var gulp = require('gulp')
var csv = require('fast-csv')
var fs = require('fs')
var Promise = require('bluebird')
var _ = require('lodash')
var changeCase = require('case')
var tidy = require('tidyaddr-js')
var jsonfile = require('jsonfile')

gulp.task('clean_sw_csv', () => {
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
return p.promise.then((types) => {
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
}).then((obj) =>{
        obj.types['data_year'] = 'text'
        obj.types["bmp_icr"] = 'boolean'
        obj.types["bmp_sw"] = 'boolean'
        obj.types["bmp_ba"] = 'boolean'
        obj.types["bmp_wet"] = 'boolean'
        obj.types["bmp_under"] = 'boolean'
        obj.types["bmp_dc"] = 'boolean'
        obj.types["bmp_land"] = 'boolean'
        obj.types["bmp_sedw"] = 'boolean'
        obj.types["bmp_ibh"] = 'boolean'
        obj.types["bmp_srr"] = 'boolean'
        obj.types["bmp_sr"] = 'boolean'
        obj.types["bmp_ds"] = 'boolean'
        obj.types["bmp_up"] = 'boolean'
        obj.types["bmp_uds"] = 'boolean'
        obj.types["bmp_spws"] = 'boolean'
        obj.types["bmp_edb"] = 'boolean'
        obj.types["bmp_pp"] = 'boolean'
        obj.types["bmp_cr"] = 'boolean'
        obj.types["bmp_or"] = 'boolean'
        obj.types["src"] = "text"

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
            if (String(ret.bmp_type).indexOf("Impervious Cover Removal") >= 0) {ret["bmp_icr"] = true}
            else{ret["bmp_icr"] = false}
            if (String(ret.bmp_type).indexOf("Shallow Wetland") >= 0) {ret["bmp_sw"] = true}
            else{ret["bmp_sw"] = false}
            if (String(ret.bmp_type).indexOf("Bio(retention Area") >= 0) {ret["bmp_ba"] = true}
            else{ret["bmp_ba"] = false}
            if (String(ret.bmp_type).indexOf("Wetlands") >= 0) {ret["bmp_wet"] = true}
            else{ret["bmp_wet"] = false}
            if (String(ret.bmp_type).indexOf("Underdrain") >= 0) {ret["bmp_under"] = true}
            else{ret["bmp_under"] = false}
            if (String(ret.bmp_type).indexOf("Debris Collector") >= 0) {ret["bmp_dc"] = true}
            else{ret["bmp_dc"] = false}
            if (String(ret.bmp_type).indexOf("Landscape") >= 0) {ret["bmp_land"] = true}
            else{ret["bmp_land"] = false}
            if (String(ret.bmp_type).indexOf("Shallow Extended Detention Wetland") >= 0) {ret["bmp_sedw"] = true}
            else{ret["bmp_sedw"] = false}
            if (String(ret.bmp_type).indexOf("Improve Bio-Habitat") >= 0) {ret["bmp_ibh"] = true}
            else{ret["bmp_ibh"] = false}
            if (String(ret.bmp_type).indexOf("Site Reforestation/Revegetation") >= 0) {ret["bmp_srr"] = true}
            else{ret["bmp_srr"] = false}
            if (String(ret.bmp_type).indexOf("Stream Restoration") >= 0) {ret["bmp_sr"] = true}
            else{ret["bmp_sr"] = false}
            if (String(ret.bmp_type).indexOf("Dry Swale") >= 0) {ret["bmp_ds"] = true}
            else{ret["bmp_ds"] = false}
            if (String(ret.bmp_type).indexOf("Utility Protection") >= 0) {ret["bmp_up"] = true}
            else{ret["bmp_up"] = false}
            if (String(ret.bmp_type).indexOf("Underground Detention System") >= 0) {ret["bmp_uds"] = true}
            else{ret["bmp_uds"] = false}
            if (String(ret.bmp_type).indexOf("Stormwater Pond/Wetland System") >= 0) {ret["bmp_spws"] = true}
            else{ret["bmp_spws"] = false}
            if (String(ret.bmp_type).indexOf("Extended Detention Basin") >= 0) {ret["bmp_edb"] = true}
            else{ret["bmp_edb"] = false}
            if (String(ret.bmp_type).indexOf("Permeable Pavement") >= 0) {ret["bmp_pp"] = true}
            else{ret["bmp_pp"] = false}
            if (String(ret.bmp_type).indexOf("Culvert Repair") >= 0) {ret["bmp_cr"] = true}
            else{ret["bmp_cr"] = false}
            if (String(ret.bmp_type).indexOf("Outfall (retrofit") >= 0) {ret["bmp_or"] = true}
            else {ret["bmp_or"] = false}
            ret["src"] = 'DPW-MS4 WIP'
            return ret
        })
        return {types:obj.types,sw:sw}
    }).then((obj) => {
        jsonfile.writeFileSync('src/data/layers/sw/sw_types.json',obj.types)
        jsonfile.writeFileSync('src/data/layers/sw/sw_sites.json',obj.sw)
        return
    })
})
