import angular from 'angular';
// switch out tile-layers here
import {baltimore, cartodbPositron as tileChoice} from './parameters.js';

export default class AppController {
  constructor($scope, $element) {
    this.$element = $element;
    angular.extend($scope, {
      baltimore: baltimore,
      defaults: {
        tileLayer: tileChoice.tileLayer,
        tileLayerOptions: tileChoice.tileLayerOptions,
        zoomControl: false
      }
    });
  }
  $onInit() {
    this.$element.addClass('flex layout-column');
  }
  $routerOnActivate() {}
}

AppController.$inject = ["$scope", "$element", "leafletData"];
