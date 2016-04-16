var config = require('../config.json')
var pg = require('knex')({client:'pg',connection:config.connection})
//var _ = require('lodash')

var express = require('express')
var app = express()



//set it to use jade
app.set('view engine', 'jade')

app.set('views','server/views')

//app.use('/static', express.static('public'))
app.use(express.static('client/app'))
app.use('/libs',express.static('node_modules'))
app.use('/app',express.static('client/app')) // Is this right?

app.get('/', (req,res) => {
	res.render('index')
})

app.get('/boundaries/:type', (req,res) => {
	var query = null
	if(req.params.type == 'csas'){
		query = pg.select(['gid','geojson']).from('boundaries.csas')
	}
	else if(req.params.type == 'nsas'){
		query = pg.select(['gid','geojson']).from('boundaries.nsas')
	}
	else if(req.params.type == 'subwatersheds'){
		query = pg.select(['gid','geojson']).from('boundaries.subwatersheds')
	}
	else{
		return res.json({err:'boundary not listed or not provided'})
	}
	if(req.query && req.query.filter){
		query = query.whereIn('gid',req.query.filter)
	}
	return query.then((data) => {
		return res.json(data)
	})
})

app.get('/layers', (req,res) => {
	var sw_query = pg.select('gid').from('layers.gpb').where('gpb_type','sw')
	var cg_query = pg.select('gid').from('layers.gpb').where('gpb_type','cg')
	var query = pg.select(['gid','geojson']).from('layers.gpb')
	if(req.query){
			sw_query = sw_query.where(false)
			cg_query = cg_query.where(false)
		if(req.query.cg_siteuse){
			if(req.query.cg_siteuse.indexOf('cgsu_act_rec') >= 0){cg_query = cg_query.orWhere('cgsu_act_rec',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_aal') >= 0){cg_query = cg_query.orWhere('cgsu_aal',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_beauty') >= 0){cg_query = cg_query.orWhere('cgsu_beauty',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_chi_act') >= 0){cg_query = cg_query.orWhere('cgsu_chi_act',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_scl_con') >= 0){cg_query = cg_query.orWhere('cgsu_scl_con',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_flw_bed') >= 0){cg_query = cg_query.orWhere('cgsu_flw_bed',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_fg_coop') >= 0){cg_query = cg_query.orWhere('cgsu_fg_coop',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_fg_ip') >= 0){cg_query = cg_query.orWhere('cgsu_fg_ip',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_fg_org') >= 0){cg_query = cg_query.orWhere('cgsu_fg_org',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_inc_gen') >= 0){cg_query = cg_query.orWhere('cgsu_inc_gen',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_mmrl') >= 0){cg_query = cg_query.orWhere('cgsu_mmrl',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_trees') >= 0){cg_query = cg_query.orWhere('cgsu_trees',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_wh_ak') >= 0){cg_query = cg_query.orWhere('cgsu_wh_ak',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_cnt_gar') >= 0){cg_query = cg_query.orWhere('cgsu_cnt_gar',true)}
			if(req.query.cg_siteuse.indexOf('cgsu_rn_gar') >= 0){cg_query = cg_query.orWhere('cgsu_rn_gar',true)}
		}
		if(req.query.cg_src){
			if (req.query.cg_src.indexOf('src_bgs') >= 0){cg_query = cg_query.orWhere('src_bgs',true)}
			if (req.query.cg_src.indexOf('src_bcmg') >= 0){cg_query = cg_query.orWhere('src_bcmg',true)}
			if (req.query.cg_src.indexOf('src_pp') >= 0){cg_query = cg_query.orWhere('src_pp',true)}
			if (req.query.cg_src.indexOf('src_pid_any') >= 0){cg_query = cg_query.orWhere('src_pid_any',true)}
			if (req.query.cg_src.indexOf('src_clf') >= 0){cg_query = cg_query.orWhere('src_clf',true)}
			if (req.query.cg_src.indexOf('src_ggi') >= 0){cg_query = cg_query.orWhere('src_ggi',true)}
		}
		if(req.query.sw_src){
			if (req.query.sw_src.indexOf('src_dpwms4') >= 0){sw_query = sw_query.orWhere('src_dpwms4',true)}
		}
		if(req.query.status){
			sw_query = sw_query.orWhereIn('status',req.query.status)
		}
		if(req.query.retrofit_type){
			sw_query = sw_query.orWhereIn('retrofit_type',req.query.retrofit_type)
		}
		if(req.query.bmp_type){
			if (req.query.bmp_type.indexOf('bmp_icr') >= 0){sw_query = sw_query.orWhere('bmp_icr',true)}
			if (req.query.bmp_type.indexOf('bmp_sw') >= 0){sw_query = sw_query.orWhere('bmp_sw',true)}
			if (req.query.bmp_type.indexOf('bmp_ba') >= 0){sw_query = sw_query.orWhere('bmp_ba',true)}
			if (req.query.bmp_type.indexOf('bmp_wet') >= 0){sw_query = sw_query.orWhere('bmp_wet',true)}
			if (req.query.bmp_type.indexOf('bmp_under') >= 0){sw_query = sw_query.orWhere('bmp_under',true)}
			if (req.query.bmp_type.indexOf('bmp_dc') >= 0){sw_query = sw_query.orWhere('bmp_dc',true)}
			if (req.query.bmp_type.indexOf('bmp_land') >= 0){sw_query = sw_query.orWhere('bmp_land',true)}
			if (req.query.bmp_type.indexOf('bmp_sedw') >= 0){sw_query = sw_query.orWhere('bmp_sedw',true)}
			if (req.query.bmp_type.indexOf('bmp_ibh') >= 0){sw_query = sw_query.orWhere('bmp_ibh',true)}
			if (req.query.bmp_type.indexOf('bmp_srr') >= 0){sw_query = sw_query.orWhere('bmp_srr',true)}
			if (req.query.bmp_type.indexOf('bmp_sr') >= 0){sw_query = sw_query.orWhere('bmp_sr',true)}
			if (req.query.bmp_type.indexOf('bmp_ds') >= 0){sw_query = sw_query.orWhere('bmp_ds',true)}
			if (req.query.bmp_type.indexOf('bmp_up') >= 0){sw_query = sw_query.orWhere('bmp_up',true)}
			if (req.query.bmp_type.indexOf('bmp_uds') >= 0){sw_query = sw_query.orWhere('bmp_uds',true)}
			if (req.query.bmp_type.indexOf('bmp_spws') >= 0){sw_query = sw_query.orWhere('bmp_spws',true)}
			if (req.query.bmp_type.indexOf('bmp_edb') >= 0){sw_query = sw_query.orWhere('bmp_edb',true)}
			if (req.query.bmp_type.indexOf('bmp_pp') >= 0){sw_query = sw_query.orWhere('bmp_pp',true)}
			if (req.query.bmp_type.indexOf('bmp_cr') >= 0){sw_query = sw_query.orWhere('bmp_cr',true)}
			if (req.query.bmp_type.indexOf('bmp_or') >= 0){sw_query = sw_query.orWhere('bmp_or',true)}
		}
		query = query.where('gid','in',sw_query)
		query = query.orWhere('gid','in',cg_query)
		if(req.query.csa_id){
			query = query.whereIn('csa_id',req.query.csa_id)
		}
		if(req.query.nsa_id){
			query = query.whereIn('nsa_id',req.query.nsa_id)
		}
		if(req.query.sws_id){
			query = query.whereIn('sws_id',req.query.sws_id)
		}
		if(req.query.data_year){
			query = query.whereIn('data_year',req.query.data_year)
		}
		if(req.query.gpb_type){
			if(req.query.gpb_type.indexOf('sw') < 0){sw_query = sw_query.where(false)}
			if(req.query.gpb_type.indexOf('cg') < 0){cg_query = cg_query.where(false)}
		}
	}
	console.log(query.toString())
	return query.then((data) => {
		return res.json(data)
	})
})

app.listen(8080,() => {
	console.log("Listening on port 8080")
})
