import './app.globals.js';
import angular from 'angular';
// import AppController from './app.controller';

import LayoutComponent from './components/layout/layout.component';
import HeaderComponent from './components/header/header.component';
import MapMenuComponent from './components/map-menu/map-menu.component';
// import ContentComponent from './components/content/content.component';
import LandingViewComponent from
  './components/landing-view/landing-view.component';
import MapViewComponent from './components/map-view/map-view.component';

import MdThemeConfig from '../shared/core/md-theme-config';

let dependencies = [
  'ngComponentRouter', 'ngMaterial', 'map', 'landing'
];

let app = angular.module('app', dependencies);

// app.controller('AppController', AppController);

app.component('appLayout', LayoutComponent);
app.component('appHeader', HeaderComponent);
app.component('appLandingView', LandingViewComponent);
app.component('appMapView', MapViewComponent);
app.component('appMapMenu', MapMenuComponent);

// TODO: fix this
var config = function($locationProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
};

config.$inject = ["$locationProvider"];

app.config(config);
app.value('$routerRootComponent', 'appLayout');

app.config(MdThemeConfig);

export default app;
