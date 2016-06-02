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
import LayersViewComponent from
  './components/layers-view/layers-view.component';
import BoundariesViewComponent from
  './components/boundaries-view/boundaries-view.component';

import {MdThemeConfig, MdIconConfig} from '../shared/core/md-config';

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
app.component('appLayersView', LayersViewComponent);
app.component('appBoundariesView', BoundariesViewComponent);

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
app.config(MdIconConfig);

export default app;
