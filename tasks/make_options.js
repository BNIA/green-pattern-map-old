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
        return {key:row.gid,val:row.mde8name,on:true}
    })
    .then((rows) => {
        opt.filters.global.push({
            'key':'sws_id',
            'val':'Subwatersheds',
            'opt':_.sortBy(rows,'key'),
            'allOn':false,
            'active':false
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
            'allOn':false,
            'active':false
        })
        var tmp = [
            {on:false,val:"Impervious Cover Removal", key:"bmp_icr"},
            {on:false,val:"Shallow Wetland", key:"bmp_sw"},
            {on:false,val:"Bio(retention Area)", key:"bmp_ba"},
            {on:false,val:"Wetlands", key:"bmp_wet"},
            {on:false,val:"Underdrain", key:"bmp_under"},
            {on:false,val:"Debris Collector", key:"bmp_dc"},
            {on:false,val:"Landscape", key:"bmp_land"},
            {on:false,val:"Shallow Extended Detention Wetland", key:"bmp_sedw"},
            {on:false,val:"Improve Bio-Habitat", key:"bmp_ibh"},
            {on:false,val:"Site Reforestation/Revegetation", key:"bmp_srr"},
            {on:false,val:"Stream Restoration", key:"bmp_sr"},
            {on:false,val:"Dry Swale", key:"bmp_ds"},
            {on:false,val:"Utility Protection", key:"bmp_up"},
            {on:false,val:"Underground Detention System", key:"bmp_uds"},
            {on:false,val:"Stormwater Pond/Wetland System", key:"bmp_spws"},
            {on:false,val:"Extended Detention Basin", key:"bmp_edb"},
            {on:false,val:"Permeable Pavement", key:"bmp_pp"},
            {on:false,val:"Culvert Repair", key:"bmp_cr"},
            {on:false,val:"Outfall (retrofit)", key:"bmp_or"}
        ]
        opt.filters.sw.push({
            'key':'bmp_type',
            'val':'Best Management Practices',
            'opt':_.sortBy(tmp,'val'),
            'allOn':false,
            'active':false})

        tmp = [
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
            'allOn':false,
            'active':false
        })
        opt.filters['all_sw'] = false
        opt.filters['all_cg'] = false
        opt.boundaries = []
        opt.boundaries.push({'key':'csas','val':'Community Statistical Areas',on:false})
        opt.boundaries.push({'key':'nsas','val':'Neighborhoods',on:false})
        opt.boundaries.push({'key':'subwatersheds','val':'Subwatersheds',on:false})
        return opt
    })
    .then(() => {
        jsonfile.writeFileSync('./lib/options.json',opt)
        return pg.destroy()
    })
})
