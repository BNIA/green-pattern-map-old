(global => {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    'rxjs': 'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular': 'node_modules/@angular',
    "@angular2-material/button": "node_modules/@angular2-material/button",
    "@angular2-material/card": "node_modules/@angular2-material/card",
    "@angular2-material/checkbox": "node_modules/@angular2-material/checkbox",
    "@angular2-material/core": "node_modules/@angular2-material/core",
    "@angular2-material/input": "node_modules/@angular2-material/input",
    "@angular2-material/list": "node_modules/@angular2-material/list",
    "@angular2-material/progress-bar": "node_modules/@angular2-material/progress-bar",
    "@angular2-material/progress-circle": "node_modules/@angular2-material/progress-circle",
    "@angular2-material/radio": "node_modules/@angular2-material/radio",
    "@angular2-material/sidenav": "node_modules/@angular2-material/sidenav",
    "@angular2-material/toolbar": "node_modules/@angular2-material/toolbar",
    "angular2":"node_modules/@angular",
    "lodash": "node_modules/lodash",
    "leaflet": "node_modules/leaflet",
    'ng2-bootstrap': "node_modules/ng2-bootstrap"
  }

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': {main: 'main.js', defaultExtension: 'js'},
    'rxjs': {defaultExtension: 'js'},
    'angular2-in-memory-web-api': {defaultExtension: 'js'},
    "materialize-css": {
            "main": "dist/js/materialize",
            "defaultExtension": "js"
        },
        "materialize": {
            "main": "dist/materialize-directive",
            "defaultExtension": "js"
        },
    '@angular2-material/button': {
      format: 'cjs', defaultExtension: 'js', main: 'button.js'},
    '@angular2-material/card': {
      format: 'cjs', defaultExtension: 'js', main: 'card.js'},
    '@angular2-material/checkbox': {
      format: 'cjs', defaultExtension: 'js', main: 'checkbox.js'},
    '@angular2-material/core': {
      format: 'cjs', defaultExtension: 'js', main: 'core.js'},
    '@angular2-material/input': {
      format: 'cjs', defaultExtension: 'js', main: 'input.js'},
    '@angular2-material/progress-bar': {
      format: 'cjs', defaultExtension: 'js', main: 'progress-bar.js'},
    '@angular2-material/progress-circle': {
      format: 'cjs', defaultExtension: 'js', main: 'progress-circle.js'},
    '@angular2-material/radio': {
      format: 'cjs', defaultExtension: 'js', main: 'radio.js'},
    '@angular2-material/sidenav': {
      format: 'cjs', defaultExtension: 'js', main: 'sidenav.js'},
    '@angular2-material/toolbar': {
      format: 'cjs', defaultExtension: 'js', main: 'toolbar.js'},
    'leaflet':{
      defaultExtension: 'js', main: 'dist/leaflet-src.js'
    },
    'lodash':{
      defaultExtension: 'js', main: 'lodash.js'
  },
  'ng2-bootstrap':{
      defaultExtension: 'js', main: 'ng2-bootstrap.js'
  }
  }

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ]

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(pkgName => {
    packages[pkgName] = {main: 'index.js', defaultExtension: 'js'}
  })

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) {
    global.filterSystemConfig(config)
  }

  System.config(config)
})(this)
