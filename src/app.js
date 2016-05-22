import angular from 'angular';
import './globals.js';

// Controller
import AppController from './app.controller.js';

// Configs
import {AppMdThemeConfig} from './app.config.js';

// My Components
import AppComponent from './map/components/app/app.js';
import HeaderComponent from './map/components/header/header.js';
import MapComponent from './map/components/map/map.js';
import FooterComponent from './map/components/footer/footer.js';

// My Directives
import ResizeMapDirective from './map/directives/resize-map.js';

let app = angular.module('app',
  ['ngMaterial', 'ui-leaflet']
);

// Controller
app.controller("AppController", AppController);

// Configs
app.config(AppMdThemeConfig);

// Components
app.component('myApp', AppComponent);
app.component('myHeader', HeaderComponent);
app.component('myMap', MapComponent);
app.component('myFooter', FooterComponent);

// Directives
app.directive('myResizeMap', ResizeMapDirective);

export default app;
