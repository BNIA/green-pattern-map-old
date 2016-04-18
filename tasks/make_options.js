var gulp = require('gulp')
var knex = require('knex')
var jsonfile = require('jsonfile')
var _ = require('lodash')
var config = require('../config.json')

gulp.task('make_options',() => {
    var pg =  knex({client:'pg',connection:config.connection})
    var opt = {}
    opt.filters = {}
    opt.filters.sw = []
    opt.filters.cg = []
    opt.filters.global = []
    return pg.distinct('gid','csa').from('boundaries.csas')
    .map((row) => {
        return {key:row.gid,val:row.csa,on:false}
    })
    .then((rows) => {
        opt.filters.global.push({
            'key':'csa_id',
            'val':'Community Statistical Areas',
            'opt':_.sortBy(rows,'key'),
            'allOn':false
        })
        return pg.distinct('gid','name').from('boundaries.nsas')
    })
    .map((row) => {
         return {key:row.gid,val:row.name,on:false}
    })
    .then((rows) => {
        opt.filters.global.push({
            'key':'nsa_id',
            'val':'Neighborhoods',
            'opt':_.sortBy(rows,'key'),
            'allOn':false
        })
        return pg.distinct('gid','mde8name').from('boundaries.subwatersheds')
    })
    .map((row) => {
        return {key:row.gid,val:row.mde8name,on:false}
    })
    .then((rows) => {
        opt.filters.global.push({
            'key':'sws_id',
            'val':'Subwatersheds',
            'opt':_.sortBy(rows,'key'),
            'allOn':false
        })
        return pg.distinct('status').from('layers.gpb').whereNotNull('status')
    })
    .map((row) => {
        return {key:row.status,val:row.status,on:false}
    })
    .then((rows) => {
        opt.filters.sw.push({
            'key':'status',
            'val':'Status',
            'opt':_.sortBy(rows,'key'),
            'allOn':false
        })
        var tmp = [
            {key:'cgsu_act_rec',val:'Active/Recreational',on:false},
            {key:'cgsu_aal',val:'Adopt a Lot',on:false},
            {key:'cgsu_ai',val:'Art Inc.',on:false},
            {key:'cgsu_beauty',val:'Beautification',on:false},
            {key:'cgsu_chi_act',val:"Children's Activities",on:false},
            {key:'cgsu_scl_con',val:'Connected to Schools',on:false},
            {key:'cgsu_flw_bed',val:'Flower Beds',on:false},
            {key:'cgsu_fg_coop',val:'Food Grown: Co-Op',on:false},
            {key:'cgsu_fg_ip',val:'Food Grown: Individual Plots',on:false},
            {key:'cgsu_fg_org',val:'Food Grown: Organic',on:false},
            {key:'cgsu_inc_gen',val:'Income Generating',on:false},
            {key:'cgsu_mmrl',val:'Memorial',on:false},
            {key:'cgsu_trees',val:'Trees',on:false},
            {key:'cgsu_wh_ak',val:'Wildlife Habitat/Animals Kept',on:false},
            {key:'cgsu_cnt_gar',val:'Container Garden',on:false},
            {key:'cgsu_rn_gar',val:'Rain Garden',on:false}
        ]
        opt.filters.cg.push({
            'key':'cg_siteuse',
            'val':'Site Use',
            'opt':_.sortBy(tmp,'val'),
            'allOn':false
        })
        return opt
    })
    .then(() => {
        jsonfile.writeFileSync('server/options.json',opt)
        return pg.destroy()
    })
})
