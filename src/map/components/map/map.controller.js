import angular from 'angular';
// switch out tile-layers here
import {baltimore, cartodbPositron as tileChoice} from './parameters.js';

/** Controller for map component
 * @param {any} $scope inherited
 * @param {any} $timeout used to invoke callback after component rendered
 * @param {any} leafletData ui-leaflet provided interactions with map
 */
function MapController($scope, $timeout, leafletData) {
  angular.extend($scope, {
    baltimore: baltimore,
    defaults: {
      tileLayer: tileChoice.tileLayer,
      tileLayerOptions: tileChoice.tileLayerOptions
    }
  });
}

MapController.$inject = ["$scope", "$timeout", "leafletData"];

export default MapController;
