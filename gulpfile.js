var gulp = require('gulp')
var requireDir = require('require-dir')
var runSequence = require('run-sequence')
var path = require('path');
var paths = require(path.join(process.cwd(), 'config/paths.js'));

requireDir('./tasks')

gulp.task('default', (cb) => {
	return runSequence(
		'create_db',
		'setup_layers_and_boundaries',
		'link_layers_and_boundaries',
		'setup_vs_data',
		'get_pics',
		'compile_jade',
		'compile_ts',
		'copy_js',
		'make_options',
		'make_mdl_scheme',
		'copy_css',
		'copy_assets'
		,cb
	)
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

gulp.task('setup_vs_data', (cb) => {
	return runSequence(
		['load_vs_data','load_vs_indicators','load_vs_meta','load_vs_sections'],
		'create_vs_colors_table',
		'colorize_vs',
		cb
	)
})

gulp.task('compile',() => {
	return runSequence([
		'compile_ts',
		'copy_js',
		'copy_html',
		'copy_css',
		'copy_assets'
	])
})

gulp.task('watch_js', () => {
	gulp.watch(['src/**/*.js'], ['copy_js'])
})

gulp.task('watch_ts', () => {
	gulp.watch('src/**/*.ts', ['compile_ts','copy_js'])
})

gulp.task('watch_html',() => {
	gulp.watch('src/**/*.html',['copy_html'])
})

gulp.task('watch_css', 	() => {
	gulp.watch(['./src/**/*.css'],['copy_css'])
})

gulp.task('watch_assets', () => {
	gulp.watch(['./src/landing/assets/*', './src/map/assets/*'],['copy_assets'])
})

gulp.task('watch_less', () => {
	gulp.watch([paths.lessSrc], ['compile_less']);
})

gulp.task('asset_watcher', ['compile_ts','copy_js','copy_html','copy_css','copy_assets'], () => {
	gulp.watch('src/**/*.ts', ['compile_ts'])
	gulp.watch(['src/**/*.js'], ['copy_js'])
	gulp.watch('src/**/*.html',['copy_html'])
	gulp.watch(['./src/**/*.css'],['copy_css'])
	gulp.watch(['./src/landing/assets/*', './src/map/assets/*'],['copy_assets'])
})
