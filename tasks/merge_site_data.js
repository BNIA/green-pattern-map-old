var gulp = require('gulp')
var mkdirp = require('mkdirp')
var _ = require('lodash')
var jsonfile = require('jsonfile')
var cg_sites = require('../src/data/layers/cg/cg_sites.json')
var cg_types = require('../src/data/layers/cg/cg_types.json')
var sw_sites = require('../src/data/layers/sw/sw_sites.json')
var sw_types = require('../src/data/layers/sw/sw_types.json')

gulp.task('merge_site_data', () => {
    var types = {}
    types = _.assign(types,sw_types)
    types = _.assign(types,cg_types)
    types.gpb_type = 'text'
    var only_sw_types = _.difference(_.keys(sw_types),_.keys(cg_types))
    var only_cg_types = _.difference(_.keys(cg_types),_.keys(sw_types))


    cg_sites = _.map(cg_sites,(s) => {
        s['gpb_type'] = 'cg'
        _.forIn(only_sw_types,(t) => {
            s[t] = null
        })
        return s
    })

    sw_sites = _.map(sw_sites,(s) => {
        s['gpb_type'] = 'sw'
        _.forIn(only_cg_types,(t) => {
            s[t] = null
        })
        return s
    })

    var sites = _.union(cg_sites,sw_sites)

    mkdirp.sync('src/data/layers/gpb')
    jsonfile.writeFileSync('src/data/layers/gpb/gpb_types.json',types)
    jsonfile.writeFileSync('src/data/layers/gpb/gpb_sites.json',sites)
    return
})
