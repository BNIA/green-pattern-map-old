// Styles
import 'angular-material/angular-material.css!';
import 'leaflet/dist/leaflet.css!';
import './styles/app.css!';
// Angular
import angular from 'angular';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import 'angular-simple-logger/dist/index.light.js';
// Leaflet
import 'leaflet';
import 'ui-leaflet';
import {primary, accent, background} from './core/colors';

import AppComponent from './map/components/app/app.js';
import HeaderComponent from './map/components/header/header.js';
import MapComponent from './map/components/map/map.js';
import FooterComponent from './map/components/footer/footer.js';

var AppController = function($scope) {
  console.log($scope);
};
AppController.$inject = ["$scope"];

var AppMdThemeConfig = function($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary', primary);
  $mdThemingProvider.definePalette('customAccent', accent);
  $mdThemingProvider.definePalette('customBackground', background);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .backgroundPalette('customBackground');
};
AppMdThemeConfig.$inject = ["$mdThemingProvider"];

let app = angular.module('app', ['ngMaterial', 'ui-leaflet']);

app.controller("AppController", AppController);
app.config(AppMdThemeConfig);

app.component('myApp', AppComponent);
app.component('myHeader', HeaderComponent);
app.component('myMap', MapComponent);
app.component('myFooter', FooterComponent);

// app.component('myMap', MapComponent);

export {app};
