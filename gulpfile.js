var gulp = require('gulp')
var requireDir = require('require-dir')
var runSequence = require('run-sequence')

requireDir('./tasks')

gulp.task('default', (cb) => {
	return runSequence('create_db','setup_layers_and_boundaries','link_layers_and_boundaries',cb)
})

gulp.task('uninstall', (cb) => {
	return runSequence('undo_create_db',cb)
})

gulp.task('setup_layers_and_boundaries', (cb) => {
	return runSequence('setup_csa_boundary','setup_nsa_boundary','setup_sws_boundary','setup_gpb_layer',cb)
})

gulp.task('setup_csa_boundary', (cb) => {
	return runSequence('get_csa_shape','load_csa_shape','make_csa_geojson',cb)
})

gulp.task('setup_nsa_boundary', (cb) => {
	return runSequence('get_nsa_shape','load_nsa_shape','make_nsa_geojson',cb)
})

gulp.task('setup_sws_boundary', (cb) => {
	return runSequence('get_sws_shape','load_sws_shape','prune_sws_table','make_sws_geojson',cb)
})

gulp.task('setup_gpb_layer', (cb) => {
	return runSequence(['clean_cg_csv','clean_sw_csv'],'merge_site_data','load_site_data','make_gpb_geojson',cb)
})

gulp.task('link_layers_and_boundaries', (cb) => {
	return runSequence('match_gpb_to_csa','match_gpb_to_nsa','match_gpb_to_sws',cb)
})

gulp.task('get_shape', ['get_nsa_shape','get_csa_shape','get_sws_shape'])

gulp.task('asset_watcher', ['compile_less','compile_ts','compile_jade'], function(){
	gulp.watch('src/css/*.less', ['compile_less'])
	gulp.watch('src/**/*.ts', ['compile_ts'])
	gulp.watch('src/**/*.jade', ['compile_jade'])
})
