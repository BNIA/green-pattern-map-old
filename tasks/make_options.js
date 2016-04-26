var gulp = require('gulp')
var knex = require('knex')
var jsonfile = require('jsonfile')
var _ = require('lodash')
var config = require('../config.json')

gulp.task('make_options',() => {
    var pg =  knex({client:'pg',connection:config.connection})
    var opt = {}
    opt.layerFilters = {}
    opt.layerFilters.sw = []
    opt.layerFilters.cg = []
    opt.layerFilters.global = []
    return pg.distinct('gid','csa').from('boundaries.csas')
    .map((row) => {
        return {key:row.gid,val:row.csa,isOn:false,active:false}
    })
    .then((rows) => {
        opt.layerFilters.global.push({
            'key':'csa_id',
            'val':'Community Statistical Areas',
            'opt':_.sortBy(rows,'key')
        })
        return pg.distinct('gid','name').from('boundaries.nsas')
    })
    .map((row) => {
         return {key:row.gid,val:row.name,isOn:false,active:false}
    })
    .then((rows) => {
        opt.layerFilters.global.push({
            'key':'nsa_id',
            'val':'Neighborhoods',
            'opt':_.sortBy(rows,'key'),
            'actibe':false
        })
        return pg.distinct('gid','mde8name').from('boundaries.subwatersheds')
    })
    .map((row) => {
        return {key:row.gid,val:row.mde8name,on:true}
    })
    .then((rows) => {
        opt.layerFilters.global.push({
            'key':'sws_id',
            'val':'Subwatersheds',
            'opt':_.sortBy(rows,'key'),
            'active':false
        })
        return pg.distinct('status').from('layers.gpb').whereNotNull('status')
    })
    .map((row) => {
        return {key:row.status,val:row.status,isOn:false,active:false}
    })
    .then((rows) => {
        opt.layerFilters.sw.push({
            'key':'status',
            'val':'Status',
            'opt':_.sortBy(rows,'key'),
            'active':false
        })
        var tmp = [
            {isOn:false,active:false,val:"Impervious Cover Removal", key:"bmp_icr"},
            {isOn:false,active:false,val:"Shallow Wetland", key:"bmp_sw"},
            {isOn:false,active:false,val:"Bio(retention Area)", key:"bmp_ba"},
            {isOn:false,active:false,val:"Wetlands", key:"bmp_wet"},
            {isOn:false,active:false,val:"Underdrain", key:"bmp_under"},
            {isOn:false,active:false,val:"Debris Collector", key:"bmp_dc"},
            {isOn:false,active:false,val:"Landscape", key:"bmp_land"},
            {isOn:false,active:false,val:"Shallow Extended Detention Wetland", key:"bmp_sedw"},
            {isOn:false,active:false,val:"Improve Bio-Habitat", key:"bmp_ibh"},
            {isOn:false,active:false,val:"Site Reforestation/Revegetation", key:"bmp_srr"},
            {isOn:false,active:false,val:"Stream Restoration", key:"bmp_sr"},
            {isOn:false,active:false,val:"Dry Swale", key:"bmp_ds"},
            {isOn:false,active:false,val:"Utility Protection", key:"bmp_up"},
            {isOn:false,active:false,val:"Underground Detention System", key:"bmp_uds"},
            {isOn:false,active:false,val:"Stormwater Pond/Wetland System", key:"bmp_spws"},
            {isOn:false,active:false,val:"Extended Detention Basin", key:"bmp_edb"},
            {isOn:false,active:false,val:"Permeable Pavement", key:"bmp_pp"},
            {isOn:false,active:false,val:"Culvert Repair", key:"bmp_cr"},
            {isOn:false,active:false,val:"Outfall (retrofit)", key:"bmp_or"}
        ]
        opt.layerFilters.sw.push({
            'key':'bmp_type',
            'val':'Best Management Practices',
            'opt':_.sortBy(tmp,'val'),
            'active':false})

        tmp = [
            {key:'cgsu_act_rec',val:'Active/Recreational',isOn:false,active:false},
            {key:'cgsu_aal',val:'Adopt a Lot',isOn:false,active:false},
            {key:'cgsu_ai',val:'Art Inc.',isOn:false,active:false},
            {key:'cgsu_beauty',val:'Beautification',isOn:false,active:false},
            {key:'cgsu_chi_act',val:"Children's Activities",isOn:false,active:false},
            {key:'cgsu_scl_con',val:'Connected to Schools',isOn:false,active:false},
            {key:'cgsu_flw_bed',val:'Flower Beds',isOn:false,active:false},
            {key:'cgsu_fg_coop',val:'Food Grown: Co-Op',isOn:false,active:false},
            {key:'cgsu_fg_ip',val:'Food Grown: Individual Plots',isOn:false,active:false},
            {key:'cgsu_fg_org',val:'Food Grown: Organic',isOn:false,active:false},
            {key:'cgsu_inc_gen',val:'Income Generating',isOn:false,active:false},
            {key:'cgsu_mmrl',val:'Memorial',isOn:false,active:false},
            {key:'cgsu_trees',val:'Trees',isOn:false,active:false},
            {key:'cgsu_wh_ak',val:'Wildlife Habitat/Animals Kept',isOn:false,active:false},
            {key:'cgsu_cnt_gar',val:'Container Garden',isOn:false,active:false},
            {key:'cgsu_rn_gar',val:'Rain Garden',isOn:false,active:false}
        ]
        opt.layerFilters.cg.push({
            'key':'cg_siteuse',
            'val':'Site Use',
            'opt':_.sortBy(tmp,'val'),
            'active':false
        })
        opt.layerFilters['allSW'] = false
        opt.layerFilters['allCG'] = false
        opt.boundaryChoices = []
        opt.boundaryChoices.push({'key':'csas','val':'Community Statistical Areas',isOn:false,active:false})
        opt.boundaryChoices.push({'key':'nsas','val':'Neighborhoods',isOn:false,active:false})
        opt.boundaryChoices.push({'key':'subwatersheds','val':'Subwatersheds',isOn:false,active:false})
        return opt
    })
    .then(() => {
        jsonfile.writeFileSync('./lib/options.json',opt)
        return pg.destroy()
    })
})
