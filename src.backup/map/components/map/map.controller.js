import angular from 'angular';
// switch out tile-layers here
import {baltimore, cartodbPositron as tileChoice} from './parameters.js';

export default class MapController {
  constructor($scope) {
    angular.extend($scope, {
      baltimore: baltimore,
      defaults: {
        tileLayer: tileChoice.tileLayer,
        tileLayerOptions: tileChoice.tileLayerOptions,
        zoomControl: false
      }
    });
  }
}

MapController.$inject = ["$scope", "leafletData"];
