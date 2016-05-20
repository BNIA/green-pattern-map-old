import template from './map.html!text';
/** The Main App Component Controller */
function MapController($scope, leafletData) {
  this.$onInit = function() {
    this.state = 'Loaded';
    console.log(this.state);
    console.log(leafletData);
    console.log($scope);
    console.log(this);
  };
}
MapController.$inject = ["$scope", "leafletData"];

class MapComponent {}
MapComponent.template = template;
MapComponent.template = template;
MapComponent.controller = MapController;

export default MapComponent;
