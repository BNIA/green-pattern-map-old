var gulp = require('gulp');
var csv = require('fast-csv');
var fs = require('fs');
var Promise = require('bluebird');
var _ = require('lodash');
var changeCase = require('case');
var tidy = require('tidyaddr-js');
var jsonfile = require('jsonfile');

gulp.task('clean_cg_csv', () => {
var filename = "data/layers/cg/cg_types.csv"
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
        var filename = "data/layers/cg/cg11.csv"
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
                zipped['data_year'] = '2011'
                return zipped
            })
            p.resolve({types:types,'cg11':objs})
        })
        stream.pipe(csvStream)
        return p.promise
    })
    .then((obj) => {
        var filename = "data/layers/cg/cg15.csv"
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
                zipped['data_year'] = '2015'
                return zipped
            })
            p.resolve({types:obj.types,'cg11':obj.cg11,'cg15':objs})
        })
        stream.pipe(csvStream)
        return p.promise
    })
    .then((obj) =>{
        obj.types['data_year'] = 'text'
        obj.types['pid_any'] = 'boolean'
        obj.types["src"] = 'text'
        obj.types['cg_siteuse'] = 'text'
        var all = _.union(obj.cg11,obj.cg15)
        var grpd = _.groupBy(all,'site_id')
        var ungrpd = _.map(grpd,(g) => {
            var sorted = _.sortBy(g,'data_year')
            sorted = _(sorted).reverse().value()
            var latest = sorted[0]
            var rest = _.tail(sorted)
            var ret = _.reduce(rest,(result,value) => {
                _.forEach(_.toPairs(obj.types),(kv) => {
                    if(kv[1] === 'boolean'){
                        result[kv[0]] = (result[kv[0]] && value[kv[0]])
                    }
                })
                result['data_year'] = value['data_year']
                return result
            },latest)
            ret['address'] = tidy.cleanLine(ret.address).tidyaddress
            //ret['address'] = changeCase.title(ret['address'])
            _.forEach(_.toPairs(obj.types),(kv) => {
                if(kv[1] === 'text'){
                    if(!(_.isNil(kv[0]))){
                        ret[kv[0]] = changeCase.title(ret[kv[0]])
                    }
                }
                if(ret[kv[0]] == ''){
                    ret[kv[0]] = null
                }
            })
            if(ret.pid || ret.pid_al || ret.pid_rp || ret.pid_g || ret.pid_f){ret['pid_any'] = true}
            else{ret['pid_any'] = false}
            src = []
            if(ret['src_bgs']){src.push('Baltimore Green Space')}
            if(ret['src_bcmg']){src.push('Baltimore City Master Gardeners')}
            if(ret['src_pp']){src.push('Parks and People')}
            if(ret['src_pid_any']){src.push('Power in Dirt')}
            if(ret['src_clf']){src.push('Center for a Livable Future')}
            if(ret['src_ggi']){src.push('Growing Green Initiative')}
            if(src === []){ret['src'] = null}
            else{ret['src'] = src.join(', ')}

            su = []
            if(ret['cgsu_act_rec']){su.push('Active/Recreational')}
            if(ret['cgsu_aal']){su.push('Adopt a Lot')}
            //if(ret['cgsu_ai']){su.push('Art Inc.')}
            if(ret['cgsu_beauty']){su.push('Beautification')}
            if(ret['cgsu_chi_act']){su.push("Children's Activities")}
            if(ret['cgsu_scl_con']){su.push('Connected to Schools')}
            if(ret['cgsu_flw_bed']){su.push('Flower Beds')}
            if(ret['cgsu_fg_coop']){su.push('Food Grown: Co-Op')}
            if(ret['cgsu_fg_ip']){su.push('Food Grown: Individual Plots')}
            if(ret['cgsu_fg_org']){su.push('Food Grown: Organic')}
            if(ret['cgsu_inc_gen']){su.push('Income Generating')}
            if(ret['cgsu_mmrl']){su.push('Memorial')}
            if(ret['cgsu_trees']){su.push('Trees')}
            if(ret['cgsu_wh_ak']){su.push('Wildlife Habitat/Animals Kept')}
            if(ret['cgsu_cnt_gar']){su.push('Container Garden')}
            if(ret['cgsu_rn_gar']){su.push('Rain Garden')}

            if(su === []){ret['cg_siteuse'] = null}
            else{ret['cg_siteuse'] = src.join(', ')}

            return ret

        })
        return {types:obj.types,cg:ungrpd}
    }).then((obj) => {
        jsonfile.writeFileSync('data/layers/cg/cg_types.json',obj.types)
        jsonfile.writeFileSync('data/layers/cg/cg_sites.json',obj.cg)
        return
    })
})
