var gulp = require('gulp')
var requireDir = require('require-dir')

requireDir('./tasks')

gulp.task('get_shape', ['get_nsa_shape','get_csa_shape','get_sws_shape'])

gulp.task('asset_watcher', ['compile_less','compile_ts','compile_jade'], function(){
	gulp.watch('src/css/*.less', ['compile_less'])
	gulp.watch('src/**/*.ts', ['compile_ts'])
	gulp.watch('src/**/*.jade', ['compile_jade'])
})
