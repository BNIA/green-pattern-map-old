import angular from 'angular';
import './map.globals';

import MapController from './map.controller';

import LayoutComponent from './components/layout/layout.component';
import MapComponent from './components/map/map.component';
import MenuBarComponent from './components/menu-bar/menu-bar.component';

import MapResizeDirective from './directives/resize-map/resize-map.directive';

let map = angular.module('map', ['ngMaterial', 'ui-leaflet']);

map.controller(MapController);

map.component('mapLayout', LayoutComponent);
map.component('mapMap', MapComponent);
map.component('mapMenuBar', MenuBarComponent);

map.directive('mapResizeMap', MapResizeDirective.factory());

export default map;
