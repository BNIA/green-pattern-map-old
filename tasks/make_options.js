var gulp = require('gulp')
var knex = require('knex')
var jsonfile = require('jsonfile')
var _ = require('lodash')
var path = require('path');
var configPath = path.join(process.env.PWD,'config/config.json');
var config = require(configPath);

gulp.task('make_options', () => {
    var pg = knex({
        client: 'pg',
        connection: config.connection
    })
    var opt = {}
    opt.layerFilters = {}
    opt.layerFilters.sw = []
    opt.layerFilters.cg = []
    opt.layerFilters.global = []
    return pg.distinct('gid', 'csa').from('boundaries.csas')
        .map((row) => {
            return {
                key: row.gid,
                val: row.csa,
                isOn: false,
                active: false
            }
        })
        .then((rows) => {
            opt.layerFilters.global.push({
                'key': 'csa_id',
                'val': 'Community Statistical Areas',
                'opt': _.sortBy(rows, 'key'),
                'active': true
            })
            return pg.distinct('gid', 'name').from('boundaries.nsas')
        })
        .map((row) => {
            return {
                key: row.gid,
                val: row.name,
                isOn: false,
                active: false
            }
        })
        .then((rows) => {
            opt.layerFilters.global.push({
                'key': 'nsa_id',
                'val': 'Neighborhoods',
                'opt': _.sortBy(rows, 'key'),
                'active': true
            })
            return pg.distinct('gid', 'mde8name').from('boundaries.subwatersheds')
        })
        .map((row) => {
            return {
                key: row.gid,
                val: row.mde8name,
                on: true
            }
        })
        .then((rows) => {
            opt.layerFilters.global.push({
                'key': 'sws_id',
                'val': 'Subwatersheds',
                'opt': _.sortBy(rows, 'key'),
                'active': true
            })
            return pg.distinct('status').from('layers.gpb').whereNotNull('status')
        })
        .map((row) => {
            return {
                key: row.status,
                val: row.status,
                isOn: false,
                active: false
            }
        })
        .then((rows) => {
            rows.push({
                key: 'status_none',
                val: '<None>',
                isOn: false,
                active: false
            })
            opt.layerFilters.sw.push({
                'key': 'status',
                'val': 'Status',
                'opt': _.sortBy(rows, 'key'),
                'active': true
            })
            var tmp = [{
                isOn: false,
                active: false,
                val: "Impervious Cover Removal",
                key: "bmp_icr"
            }, {
                isOn: false,
                active: false,
                val: "Shallow Wetland",
                key: "bmp_sw"
            }, {
                isOn: false,
                active: false,
                val: "Bio(retention Area)",
                key: "bmp_ba"
            }, {
                isOn: false,
                active: false,
                val: "Wetlands",
                key: "bmp_wet"
            }, {
                isOn: false,
                active: false,
                val: "Underdrain",
                key: "bmp_under"
            }, {
                isOn: false,
                active: false,
                val: "Debris Collector",
                key: "bmp_dc"
            }, {
                isOn: false,
                active: false,
                val: "Landscape",
                key: "bmp_land"
            }, {
                isOn: false,
                active: false,
                val: "Shallow Extended Detention Wetland",
                key: "bmp_sedw"
            }, {
                isOn: false,
                active: false,
                val: "Improve Bio-Habitat",
                key: "bmp_ibh"
            }, {
                isOn: false,
                active: false,
                val: "Site Reforestation/Revegetation",
                key: "bmp_srr"
            }, {
                isOn: false,
                active: false,
                val: "Stream Restoration",
                key: "bmp_sr"
            }, {
                isOn: false,
                active: false,
                val: "Dry Swale",
                key: "bmp_ds"
            }, {
                isOn: false,
                active: false,
                val: "Utility Protection",
                key: "bmp_up"
            }, {
                isOn: false,
                active: false,
                val: "Underground Detention System",
                key: "bmp_uds"
            }, {
                isOn: false,
                active: false,
                val: "Stormwater Pond/Wetland System",
                key: "bmp_spws"
            }, {
                isOn: false,
                active: false,
                val: "Extended Detention Basin",
                key: "bmp_edb"
            }, {
                isOn: false,
                active: false,
                val: "Permeable Pavement",
                key: "bmp_pp"
            }, {
                isOn: false,
                active: false,
                val: "Culvert Repair",
                key: "bmp_cr"
            }, {
                isOn: false,
                active: false,
                val: "Outfall (retrofit)",
                key: "bmp_or"
            }]
            tmp = _.sortBy(tmp, 'val')
            tmp.push({
                isOn: false,
                active: false,
                val: "<None>",
                key: "bmp_none"
            })
            opt.layerFilters.sw.push({
                'key': 'bmp_type',
                'val': 'Best Management Practices',
                'opt': tmp,
                'active': true
            })

            tmp = [{
                key: 'cgsu_act_rec',
                val: 'Active/Recreational',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_aal',
                val: 'Adopt a Lot',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_ai',
                val: 'Art Inc.',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_beauty',
                val: 'Beautification',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_chi_act',
                val: "Children's Activities",
                isOn: false,
                active: false
            }, {
                key: 'cgsu_scl_con',
                val: 'Connected to Schools',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_flw_bed',
                val: 'Flower Beds',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_fg_coop',
                val: 'Food Grown: Co-Op',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_fg_ip',
                val: 'Food Grown: Individual Plots',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_fg_org',
                val: 'Food Grown: Organic',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_inc_gen',
                val: 'Income Generating',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_mmrl',
                val: 'Memorial',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_trees',
                val: 'Trees',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_wh_ak',
                val: 'Wildlife Habitat/Animals Kept',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_cnt_gar',
                val: 'Container Garden',
                isOn: false,
                active: false
            }, {
                key: 'cgsu_rn_gar',
                val: 'Rain Garden',
                isOn: false,
                active: false
            }]

            tmp = _.sortBy(tmp, 'val')
            tmp.push({
                key: 'cgsu_none',
                val: '<None>',
                isOn: false,
                active: false
            })
            opt.layerFilters.cg.push({
                'key': 'cg_siteuse',
                'val': 'Site Use',
                'opt': tmp,
                'active': true
            })
            opt.layerFilters['allSW'] = false
            opt.layerFilters['allCG'] = false
            opt.boundaryChoices = []

            return opt
        })
        .then(() => opt.boundaryChoices.push({
            'key': 'none_bc',
            'val': '<None>',
            isOn: true,
            active: true,
            configs: []
        }))
        .then(() => {
            var csas = {
                'key': 'csas',
                'val': 'Community Statistical Areas',
                isOn: false,
                active: true,
                configs: []
            }
            var cOpt = {
                'key': 'vital_signs',
                'val': 'Vital Signs',
                active: true,
                opt: []
            }
            return pg.select()
                .from('vital_signs.indicators')
                .leftJoin('vital_signs.sections', 'indicators.section_id', 'sections.id')
                .whereNotNull('break_l1')
                .map(row => { return {
                    key: row.short_name,
                    val: row.long_name,
                    isOn: false,
                    active: true,
                    properties: {
                        section: row.section,
                        src: row.full_src
                    }
                }})
                .then(rows => {
                    cOpt.opt = rows
                    csas.configs = [cOpt]
                    opt.boundaryChoices.push(csas)
                })
        })
        .then(() => opt.boundaryChoices.push({
            'key': 'nsas',
            'val': 'Neighborhoods',
            isOn: false,
            active: true,
            configs: []
        }))
        .then(() => opt.boundaryChoices.push({
            'key': 'subwatersheds',
            'val': 'Subwatersheds',
            isOn: false,
            active: true,
            configs: []
        }))
        .then(() => {
            jsonfile.writeFileSync('./server/options.json', opt)
            return pg.destroy()
        })
})
