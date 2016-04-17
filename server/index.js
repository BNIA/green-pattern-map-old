var config = require('../config.json')
var pg = require('knex')({client:'pg',connection:config.connection})
var _ = require('lodash')

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
	//client query
	var cq = req.query
	//db query
	var pgq = pg.select(['gid','geojson'])
		.from('layers.gpb')
		.where((qh) => {
			//Stomwater Points
			qh.where((qi) => {
				qi.where('gpb_type','sw').where((qj) => {
				// 	//all_sw -- if we just want all of the stormwater points, use the all_sw option
					console.log(cq.all_sw)
					if(cq.all_sw === '1'){qj.where(true)}
					else{qj.where(false)}
				//
					//sw_src
					if(_(cq.sw_src).includes('src_dpwms4')){qj.where('src_dpwms4',true)}

					//status
					if(cq.status){qj.orWhereIn('status',cq.status)}

					//retrofit type
					if(cq.retrofit_type){qj.orWhereIn('retrofit_type',cq.retrofit_type)}

					//bmp type
					if (_(cq.bmp_type).includes('bmp_icr')){qj.orWhere('bmp_icr',true)}
					if (_(cq.bmp_type).includes('bmp_sw')){qj.orWhere('bmp_sw',true)}
					if (_(cq.bmp_type).includes('bmp_ba')){qj.orWhere('bmp_ba',true)}
					if (_(cq.bmp_type).includes('bmp_wet')){qj.orWhere('bmp_wet',true)}
					if (_(cq.bmp_type).includes('bmp_under')){qj.orWhere('bmp_under',true)}
					if (_(cq.bmp_type).includes('bmp_dc')){qj.orWhere('bmp_dc',true)}
					if (_(cq.bmp_type).includes('bmp_land')){qj.orWhere('bmp_land',true)}
					if (_(cq.bmp_type).includes('bmp_sedw')){qj.orWhere('bmp_sedw',true)}
					if (_(cq.bmp_type).includes('bmp_ibh')){qj.orWhere('bmp_ibh',true)}
					if (_(cq.bmp_type).includes('bmp_srr')){qj.orWhere('bmp_srr',true)}
					if (_(cq.bmp_type).includes('bmp_sr')){qj.orWhere('bmp_sr',true)}
					if (_(cq.bmp_type).includes('bmp_ds')){qj.orWhere('bmp_ds',true)}
					if (_(cq.bmp_type).includes('bmp_up')){qj.orWhere('bmp_up',true)}
					if (_(cq.bmp_type).includes('bmp_uds')){qj.orWhere('bmp_uds',true)}
					if (_(cq.bmp_type).includes('bmp_spws')){qj.orWhere('bmp_spws',true)}
					if (_(cq.bmp_type).includes('bmp_edb')){qj.orWhere('bmp_edb',true)}
					if (_(cq.bmp_type).includes('bmp_pp')){qj.orWhere('bmp_pp',true)}
					if (_(cq.bmp_type).includes('bmp_cr')){qj.orWhere('bmp_cr',true)}
					if (_(cq.bmp_type).includes('bmp_or')){qj.orWhere('bmp_or',true)}
				})
			})
			//Community Garden Points
			.orWhere((qi) => {
				qi.where('gpb_type','cg').where((qj) => {
					//all_cg
					if(cq.all_cg === '1'){qj.where(true)}
					else{qj.where(false)}

					//cg_src
					if(_(cq.cg_src).includes('src_bgs')){qj.orWhere('src_bgs',true)}
					if(_(cq.cg_src).includes('src_bcmg')){qj.orWhere('src_bcmg',true)}
					if(_(cq.cg_src).includes('src_pp')){qj.orWhere('src_pp',true)}
					if(_(cq.cg_src).includes('src_pid_any')){qj.orWhere('src_pid_any',true)}
					if(_(cq.cg_src).includes('src_clf')){qj.orWhere('src_clf',true)}
					if(_(cq.cg_src).includes('src_ggi')){qj.orWhere('src_ggi',true)}

					//cg_siteuse
					if(_(cq.cg_siteuse).includes('cgsu_act_rec')){qj.orWhere('cgsu_act_rec',true)}
					if(_(cq.cg_siteuse).includes('cgsu_aal')){qj.orWhere('cgsu_aal',true)}
					if(_(cq.cg_siteuse).includes('cgsu_beauty')){qj.orWhere('cgsu_beauty',true)}
					if(_(cq.cg_siteuse).includes('cgsu_chi_act')){qj.orWhere('cgsu_chi_act',true)}
					if(_(cq.cg_siteuse).includes('cgsu_scl_con')){qj.orWhere('cgsu_scl_con',true)}
					if(_(cq.cg_siteuse).includes('cgsu_flw_bed')){qj.orWhere('cgsu_flw_bed',true)}
					if(_(cq.cg_siteuse).includes('cgsu_fg_coop')){qj.orWhere('cgsu_fg_coop',true)}
					if(_(cq.cg_siteuse).includes('cgsu_fg_ip')){qj.orWhere('cgsu_fg_ip',true)}
					if(_(cq.cg_siteuse).includes('cgsu_fg_org')){qj.orWhere('cgsu_fg_org',true)}
					if(_(cq.cg_siteuse).includes('cgsu_inc_gen')){qj.orWhere('cgsu_inc_gen',true)}
					if(_(cq.cg_siteuse).includes('cgsu_mmrl')){qj.orWhere('cgsu_mmrl',true)}
					if(_(cq.cg_siteuse).includes('cgsu_trees')){qj.orWhere('cgsu_trees',true)}
					if(_(cq.cg_siteuse).includes('cgsu_wh_ak')){qj.orWhere('cgsu_wh_ak',true)}
					if(_(cq.cg_siteuse).includes('cgsu_cnt_gar')){qj.orWhere('cgsu_cnt_gar',true)}
					if(_(cq.cg_siteuse).includes('cgsu_rn_gar')){qj.orWhere('cgsu_rn_gar',true)}
				})
			})
		})

		//GLOBAL FILTERS
		if(cq.csa_id){
			pgq = pgq.whereIn('csa_id',cq.csa_id)
		}
		if(cq.nsa_id){
			pgq = pgq.whereIn('nsa_id',cq.nsa_id)
		}
		if(cq.sws_id){
			pgq = pgq.whereIn('sws_id',cq.sws_id)
		}
		if(cq.data_year){
			pgq = pgq.whereIn('data_year',cq.data_year)
		}


		console.log(pgq.toString())
		return pgq.then((data) => {
			return res.json(data)
		})
})


app.get('/layers2', (req,res) => {
	var sw_query = pg.select('gid').from('layers.gpb').where('gpb_type','sw')
	var cg_query = pg.select('gid').from('layers.gpb').where('gpb_type','cg')
	var query = pg.select(['gid','geojson']).from('layers.gpb')
	if(req.query){
			sw_query = sw_query.where(false)
			cg_query = cg_query.where(false)



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
