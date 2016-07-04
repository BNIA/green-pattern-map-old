var _ = require('lodash')

var filterLayers = function(pg,filters){
  // console.log(filters);
    var sw = _.find(filters, {key: 'sw'});
    var cg = _.find(filters, {key: 'cg'});
    var glob = _.find(filters, {key: 'global'});
    var query = pg.select('geojson').from('layers.gpb').where((qh) => {
        qh.where((qi) => {
            qi.where('gpb_type','sw').where((qj) => {
                //all_sw -- if we just want all of the stormwater points, use the all_sw option
                if(sw.allOn === 1){qj.where(true)}
                else{qj.where(false)}

                //TODO: sw_src, retrofit_type

                //status
                var status = _.find(sw.opt, {'key': 'status'});
                    if(_.find(status.opt,{key:'Active'}).isOn == true){
                        qj.orWhere('status','Active')
                    }
                    if(_.find(status.opt,{key:'Identified'}).isOn == true){
                        qj.orWhere('status','Identified')
                    }
                    if(_.find(status.opt,{key:'status_none'}).isOn == true){
                        qj.orWhereNull('status')
                    }
                //bmp_type
                var bmp_type = _.find(sw.opt, {'key':'bmp_type'});
                    if(_.find(bmp_type.opt,{key:'bmp_icr'}).isOn === true){
                        qj.orWhere('bmp_icr',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_sw'}).isOn === true){
                        qj.orWhere('bmp_sw',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_ba'}).isOn === true){
                        qj.orWhere('bmp_ba',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_wet'}).isOn === true){
                        qj.orWhere('bmp_wet',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_under'}).isOn === true){
                        qj.orWhere('bmp_under',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_dc'}).isOn === true){
                        qj.orWhere('bmp_dc',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_land'}).isOn === true){
                        qj.orWhere('bmp_land',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_sedw'}).isOn === true){
                        qj.orWhere('bmp_sedw',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_ibh'}).isOn === true){
                        qj.orWhere('bmp_ibh',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_srr'}).isOn === true){
                        qj.orWhere('bmp_srr',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_sr'}).isOn === true){
                        qj.orWhere('bmp_sr',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_ds'}).isOn === true){
                        qj.orWhere('bmp_ds',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_up'}).isOn === true){
                        qj.orWhere('bmp_up',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_uds'}).isOn === true){
                        qj.orWhere('bmp_uds',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_spws'}).isOn === true){
                        qj.orWhere('bmp_spws',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_edb'}).isOn === true){
                        qj.orWhere('bmp_edb',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_pp'}).isOn === true){
                        qj.orWhere('bmp_pp',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_cr'}).isOn === true){
                        qj.orWhere('bmp_cr',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_or'}).isOn === true){
                        qj.orWhere('bmp_or',true)
                    }
                    if(_.find(bmp_type.opt,{key:'bmp_none'}).isOn === true){
                        qj.orWhere((qh) => {
                            qh.where('bmp_icr',false)
                            qh.where('bmp_sw',false)
                            qh.where('bmp_ba',false)
                            qh.where('bmp_wet',false)
                            qh.where('bmp_under',false)
                            qh.where('bmp_dc',false)
                            qh.where('bmp_land',false)
                            qh.where('bmp_sedw',false)
                            qh.where('bmp_ibh',false)
                            qh.where('bmp_srr',false)
                            qh.where('bmp_sr',false)
                            qh.where('bmp_ds',false)
                            qh.where('bmp_up',false)
                            qh.where('bmp_uds',false)
                            qh.where('bmp_spws',false)
                            qh.where('bmp_edb',false)
                            qh.where('bmp_pp',false)
                            qh.where('bmp_cr',false)
                            qh.where('bmp_or',false)
                        })
                    }
            })
        }).orWhere((qi) => {
            qi.where('gpb_type','cg').where((qj) => {
                //all_cg
                if(cg.allOn === 1){qj.where(true)}
                else{qj.where(false)}

                //TODO: cg_src, mg_type

                //cg_siteuse
                var cg_siteuse = _.find(cg.opt, {'key':'cg_siteuse'})
                    if(_.find(cg_siteuse.opt,{key:'cgsu_act_rec'}).isOn === true){qj.orWhere('cgsu_act_rec',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_aal'}).isOn === true){qj.orWhere('cgsu_aal',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_beauty'}).isOn === true){qj.orWhere('cgsu_beauty',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_chi_act'}).isOn === true){qj.orWhere('cgsu_chi_act',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_scl_con'}).isOn === true){qj.orWhere('cgsu_scl_con',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_flw_bed'}).isOn === true){qj.orWhere('cgsu_flw_bed',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_fg_coop'}).isOn === true){qj.orWhere('cgsu_fg_coop',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_fg_ip'}).isOn === true){qj.orWhere('cgsu_fg_ip',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_fg_org'}).isOn === true){qj.orWhere('cgsu_fg_org',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_inc_gen'}).isOn === true){qj.orWhere('cgsu_inc_gen',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_mmrl'}).isOn === true){qj.orWhere('cgsu_mmrl',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_trees'}).isOn === true){qj.orWhere('cgsu_trees',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_wh_ak'}).isOn === true){qj.orWhere('cgsu_wh_ak',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_cnt_gar'}).isOn === true){qj.orWhere('cgsu_cnt_gar',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_rn_gar'}).isOn === true){qj.orWhere('cgsu_rn_gar',true)}
                    if(_.find(cg_siteuse.opt,{key:'cgsu_none'}).isOn === true){qj.orWhere((qh) => {
                        qh.where('cgsu_act_rec',false)
                        qh.where('cgsu_aal',false)
                        qh.where('cgsu_beauty',false)
                        qh.where('cgsu_chi_act',false)
                        qh.where('cgsu_scl_con',false)
                        qh.where('cgsu_flw_bed',false)
                        qh.where('cgsu_fg_coop',false)
                        qh.where('cgsu_fg_ip',false)
                        qh.where('cgsu_fg_org',false)
                        qh.where('cgsu_inc_gen',false)
                        qh.where('cgsu_mmrl',false)
                        qh.where('cgsu_trees',false)
                        qh.where('cgsu_wh_ak',false)
                        qh.where('cgsu_cnt_gar',false)
                        qh.where('cgsu_rn_gar',false)
                        qh.where('cgsu_rn_gar',false)
                    })}
            })
        })
    })

    //GLOBAL FILTERS
    //TODO: data_year

    var csa_id = _.find(glob.opt,{'key':'csa_id'})
        var on_csa_ids = _.filter(csa_id.opt,{'isOn':true}).map((k) => {return k.key})
        console.log(on_csa_ids)
        if(on_csa_ids.length > 0){
            query = query.whereIn('csa_id',on_csa_ids)
    }
    var nsa_id = _.find(glob.opt,{'key':'nsa_id'})
        var on_nsa_ids = _.filter(nsa_id.opt,{'isOn':true}).map((k) => {return k.key})
        if(on_nsa_ids.length > 0){
            query = query.whereIn('nsa_id',on_nsa_ids)
    }
    var sws_id = _.find(glob.opt,{'key':'sws_id'})
        var on_sws_ids = _.filter(sws_id.opt,{'isOn':true}).map((k) => {return k.key})
        if(on_sws_ids.length > 0){
            query = query.whereIn('sws_id',on_sws_ids)
    }
    console.log(query.toString())
    return query.map((row) => {
        return row.geojson
    })
}

module.exports = (pg) => {
    var express = require('express')
    var router = express.Router()
    router.use(require('body-parser').json())
    router.post('/', (req,res) => {
            return filterLayers(pg,req.body)
                .then((data) => {
                    return res.json(data)
                })
        })
    return router
}
