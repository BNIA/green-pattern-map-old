import angular from 'angular';
import './globals.js';

// Modules
import landing from './modules/landing/landing';

// Controller
import AppController from './app.controller.js';

// Configs
import {AppMdThemeConfig, AppRouteConfig} from './app.config.js';

// My Components
import AppComponent from './map/components/app/app.js';
import HeaderComponent from './map/components/header/header.js';
import MapComponent from './map/components/map/map.js';
import FooterComponent from './map/components/footer/footer.js';

// My Directives
import ResizeDirective from './map/directives/resize-map.js';

let app = angular.module('app',
  ['ngRoute', 'ngMaterial', 'ui-leaflet', 'app.landing']
);

// Controller
app.controller("AppController", AppController);

// Configs
app.config(AppRouteConfig);
app.config(AppMdThemeConfig);

// Components
app.component('myApp', AppComponent);
app.component('myHeader', HeaderComponent);
app.component('myMap', MapComponent);
app.component('myFooter', FooterComponent);

// Directives
app.directive('myResizeMap', ResizeDirective);

export default app;
