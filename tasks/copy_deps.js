// var gulp = require('gulp')
// var _ = require('lodash')
// var jspm = require('jspm')
// var path = require('path')
// var System = new jspm.Loader()

// var browserPaths = [
//     [/^github:/, "/jspm_packages/github/"],
//     [/^npm:/, "/jspm_packages/npm/"]
// ]

// var getFullPkgPath = (pkgPath) => {
//     var parts = _.words(pkgPath,/[^/]+/g)
//     var pkgName = parts[0]
//     var rest = _.tail(parts).join('/')

//     if(rest !== ''){
//         rest = '/' + rest
//     }
//     var path1 = System.map[pkgName]
//     if(_.isNil(path1)){
//         var retPath =  process.env.PWD + '/' + pkgPath
//         return retPath
//     }
//     var path2 = _.reduce(browserPaths,(res,val) => {
//         res = res.replace(val[0],val[1])
//         return res
//     },path1)
//     var path3 = process.env.PWD + path2
//     var path4 = path3 + rest
//     return path4
// }

// var mapDeps = [
//     "jspm.browser.js",
//     "jspm.config.js",
//     "zone.js/dist/zone.js",
//     "reflect-metadata/Reflect.js",
//     "jspm_packages/system.js",
//     "es6-shim/es6-shim.min.js",
//     "jspm_packages/system-polyfills.js",
//     "angular2/es6/dev/src/testing/shims_for_IE.js",
//     "angular2/bundles/angular2-polyfills.js",
//     "rxjs/bundles/Rx.js",
//     "angular2/bundles/angular2.dev.js",
//     "angular2/bundles/http.dev.js",
//     "leaflet/dist/leaflet.css",
//     "material-design-lite/material.min.css",
//     "material-design-lite/material.min.js"
// ]

// var mapSrcDest = _.map(mapDeps,(val) => {
//     var p = path.dirname(val)
//     return [p,getFullPkgPath(val)]
// })

// gulp.task('copy_deps', () => {
//     var stream = require('merge-stream')()
//     _.forIn(mapSrcDest,(arr) => {
//         val = arr[1]
//         key = arr[0]
//         console.log(val)
//         console.log(key)
//         console.log(process.env.PWD + '/client/map/libs/' + key)
//         console.log()
//         stream.add(
//             gulp.src(val)
//                 .pipe(gulp.dest(process.env.PWD + '/client/map/libs/' + key))
//         )
//     })
//     return stream.isEmpty() ? null : stream
// })
