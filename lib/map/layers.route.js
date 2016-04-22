var filterLayers = function(pg,filters){
    var query = pg.select('geojson').from('layers.gpb').where((qh) => {
        qh.where((qi) => {
            qi.where('gpb_type','sw').where((qj) => {
                //all_sw -- if we just want all of the stormwater points, use the all_sw option
                if(filters.all_sw === true){qj.where(true)}
                else{qj.where(false)}

                //TODO: sw_src, retrofit_type

                //status
                var status = _(filters.sw).find('key','status')
                if(status.active === true){
                    if(_(status).find('key','Active').on == true){
                        qj.orWhere('status','Active')
                    }
                    if(_(status).find('key','Unidentified').on == true){
                        qj.orWhere('status','Unidentified')
                    }
                }
                //bmp_type
                var bmp_type = _(filters.sw).find('key','bmp_type')
                if(bmp_type.active === true){
                    if(_(bmp_type).find('key','bmp_icr').on === true){
                        qj.orWhere('bmp_icr',true)
                    }
                    if(_(bmp_type).find('key','bmp_sw').on === true){
                        qj.orWhere('bmp_sw',true)
                    }
                    if(_(bmp_type).find('key','bmp_ba').on === true){
                        qj.orWhere('bmp_ba',true)
                    }
                    if(_(bmp_type).find('key','bmp_wet').on === true){
                        qj.orWhere('bmp_wet',true)
                    }
                    if(_(bmp_type).find('key','bmp_under').on === true){
                        qj.orWhere('bmp_under',true)
                    }
                    if(_(bmp_type).find('key','bmp_dc').on === true){
                        qj.orWhere('bmp_dc',true)
                    }
                    if(_(bmp_type).find('key','bmp_land').on === true){
                        qj.orWhere('bmp_land',true)
                    }
                    if(_(bmp_type).find('key','bmp_sedw').on === true){
                        qj.orWhere('bmp_sedw',true)
                    }
                    if(_(bmp_type).find('key','bmp_ibh').on === true){
                        qj.orWhere('bmp_ibh',true)
                    }
                    if(_(bmp_type).find('key','bmp_srr').on === true){
                        qj.orWhere('bmp_srr',true)
                    }
                    if(_(bmp_type).find('key','bmp_sr').on === true){
                        qj.orWhere('bmp_sr',true)
                    }
                    if(_(bmp_type).find('key','bmp_ds').on === true){
                        qj.orWhere('bmp_ds',true)
                    }
                    if(_(bmp_type).find('key','bmp_up').on === true){
                        qj.orWhere('bmp_up',true)
                    }
                    if(_(bmp_type).find('key','bmp_uds').on === true){
                        qj.orWhere('bmp_uds',true)
                    }
                    if(_(bmp_type).find('key','bmp_spws').on === true){
                        qj.orWhere('bmp_spws',true)
                    }
                    if(_(bmp_type).find('key','bmp_edb').on === true){
                        qj.orWhere('bmp_edb',true)
                    }
                    if(_(bmp_type).find('key','bmp_pp').on === true){
                        qj.orWhere('bmp_pp',true)
                    }
                    if(_(bmp_type).find('key','bmp_cr').on === true){
                        qj.orWhere('bmp_cr',true)
                    }
                    if(_(bmp_type).find('key','bmp_or').on === true){
                        qj.orWhere('bmp_or',true)
                    }
                }
            })
        }).orWhere((qi) => {
            qi.where('gpb_type','sw').where((qj) => {
                //all_cg
                if(filters.all_cg === true){qj.where(true)}
                else{qj.where(false)}

                //TODO: cg_src, mg_type

                //cg_siteuse
                var cg_siteuse = _(filters.cg).find('key','cg_siteuse')
                if(cg_siteuse.active === true){
                    if(_(cg_siteuse).find('key','cgsu_act_rec').on === true){qj.orWhere('cgsu_act_rec',true)}
                    if(_(cg_siteuse).find('key','cgsu_aal').on === true){qj.orWhere('cgsu_aal',true)}
                    if(_(cg_siteuse).find('key','cgsu_beauty').on === true){qj.orWhere('cgsu_beauty',true)}
                    if(_(cg_siteuse).find('key','cgsu_chi_act').on === true){qj.orWhere('cgsu_chi_act',true)}
                    if(_(cg_siteuse).find('key','cgsu_scl_con').on === true){qj.orWhere('cgsu_scl_con',true)}
                    if(_(cg_siteuse).find('key','cgsu_flw_bed').on === true){qj.orWhere('cgsu_flw_bed',true)}
                    if(_(cg_siteuse).find('key','cgsu_fg_coop').on === true){qj.orWhere('cgsu_fg_coop',true)}
                    if(_(cg_siteuse).find('key','cgsu_fg_ip').on === true){qj.orWhere('cgsu_fg_ip',true)}
                    if(_(cg_siteuse).find('key','cgsu_fg_org').on === true){qj.orWhere('cgsu_fg_org',true)}
                    if(_(cg_siteuse).find('key','cgsu_inc_gen').on === true){qj.orWhere('cgsu_inc_gen',true)}
                    if(_(cg_siteuse).find('key','cgsu_mmrl').on === true){qj.orWhere('cgsu_mmrl',true)}
                    if(_(cg_siteuse).find('key','cgsu_trees').on === true){qj.orWhere('cgsu_trees',true)}
                    if(_(cg_siteuse).find('key','cgsu_wh_ak').on === true){qj.orWhere('cgsu_wh_ak',true)}
                    if(_(cg_siteuse).find('key','cgsu_cnt_gar').on === true){qj.orWhere('cgsu_cnt_gar',true)}
                    if(_(cg_siteuse).find('key','cgsu_rn_gar').on === true){qj.orWhere('cgsu_rn_gar',true)}
                }
            })
        })
    })

    //GLOBAL FILTERS
    //TODO: data_year

    var csa_id = _(filters.global).find('key','csa_id')
    if(csa_id.active === true){
        var on_csa_ids = _(csa_id).filter({'on':true}).map('key')
        query = query.whereIn('csa_id',on_csa_ids)
    }
    var nsa_id = _(filters.global).find('key','nsa_id')
    if(nsa_id.active === true){
        var on_nsa_ids = _(nsa_id).filter({'on':true}).map('key')
        query = query.whereIn('nsa_id',on_nsa_ids)
    }
    var sws_id = _(filters.global).find('key','sws_id')
    if(sws_id.active === true){
        var on_sws_ids = _(sws_id).filter({'on':true}).map('key')
        query = query.whereIn('sws_id',on_sws_ids)
    }
    return query
}

module.exports = (pg) => {
    var express = require('express')
    var router = express.Router()

    router.route('/')
        .post((req,res) => {
            return filterLayers(pg,req.body)
                .then((data) => {
                    return res.json(data)
                })
        })
    return router
}
