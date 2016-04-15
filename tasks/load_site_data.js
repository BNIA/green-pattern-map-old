var gulp = require('gulp')
var knex = require('knex')
var _ = require('lodash')
var Promise = require('bluebird')
var config = require('../config.json')
var gpb_types = null
var gpb_sites = null

gulp.task('load_site_data', () => {
    var pg = knex({client:'pg',connection:config.connection})
    // Make sure that boundaries schema exists
    gpb_types = require('../src/data/layers/gpb/gpb_types.json')
    gpb_sites = require('../src/data/layers/gpb/gpb_sites.json')
    return pg.raw('CREATE SCHEMA IF NOT EXISTS "layers"').then(() => {
        return pg.schema.createTableIfNotExists('layers.gpb',(table) => {
                table.increments('gid').primary().unique()
                _.forIn(gpb_types,(v,k) => {
                    table.specificType(k,v).defaultTo(null)
                })
                table.integer('csa_id').defaultTo(null)
                table.integer('nsa_id').defaultTo(null)
                table.integer('sws_id').defaultTo(null)
                table.specificType('geometry','geometry(Point,4326)').defaultTo(null)
            })
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_gpb_type ON layers.gpb(gpb_type)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_csa_id ON layers.gpb(csa_id)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_nsa_id ON layers.gpb(nsa_id)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_sws_id ON layers.gpb(sws_id)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_bmp_type ON layers.gpb(bmp_type)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_act_rec ON layers.gpb(cgsu_act_rec)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_aal ON layers.gpb(cgsu_aal)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_beauty ON layers.gpb(cgsu_beauty)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_chi_act ON layers.gpb(cgsu_chi_act)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_scl_con ON layers.gpb(cgsu_scl_con)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_flw_bed ON layers.gpb(cgsu_flw_bed)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_fg_coop ON layers.gpb(cgsu_fg_coop)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_fg_ip ON layers.gpb(cgsu_fg_ip)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_fg_org ON layers.gpb(cgsu_fg_org)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_inc_gen ON layers.gpb(cgsu_inc_gen)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_mmrl ON layers.gpb(cgsu_mmrl)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_trees ON layers.gpb(cgsu_trees)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_wh_ak ON layers.gpb(cgsu_wh_ak)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_cnt_gar ON layers.gpb(cgsu_cnt_gar)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_cgsu_rn_gar ON layers.gpb(cgsu_rn_gar)')
    }).then(() => {
        return pg.raw('CREATE INDEX gpb_mg_type ON layers.gpb(mg_type)')
    }).then(() => {
        return Promise.map(gpb_sites,(s) => {
            return pg('layers.gpb').insert(s).then(() => {return "done"})
        },{concurrency:1})
    }).then(() => {
        return pg.raw('update layers.gpb set geometry = ST_SetSRID(ST_MakePoint(point_x,point_y),4326)')
    }).then(() => {
        return pg.destroy()
    })
})
