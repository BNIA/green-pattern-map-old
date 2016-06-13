export default class AppController {
  constructor($scope, $rootScope, $rootRouter, $location, $mdSidenav, $mdMedia,
    optionsService, layersService) {
    this.$scope = $scope;
    this.$rootScope = $rootScope; // The Root Scope of the app
    this.$rootRouter = $rootRouter;
    this.$location = $location;
    this.$mdSidenav = $mdSidenav;
    this.$mdMedia = $mdMedia;
    this.optionsService = optionsService;
    this.layersService = layersService;

    // Assign local variables
    this.title = 'Green Pattern Map';
    this.layerFilters = null;
    this.boundaryChoices = null;
    this.vitalSigns = null;
    this.selected = null;
    this.path = null;

    // Assign to scope for children to access
    this.$rootScope.title = this.title;
  }
  reroute(route, options = {id: 1}) {
    this.$rootRouter.navigate([route, options])
      .then(() => {
        this.path = this.$location.path();
      });
  }
  toggleSidenav(side, onOff) {
    if (onOff === true) {
      this.$mdSidenav(side).open();
    } else if (onOff === false) {
      this.$mdSidenav(side).close();
    } else {
      this.$mdSidenav(side).toggle();
    }
  }
  selectItem(item) {
    this.selected = item;
    this.toggleSidenav('right', true);
  }
  $onInit() {
    this.optionsService.getLayerFilters().then(data => {
      this.layerFilters = data;
    });
    this.optionsService.getBoundaryChoices().then(data => {
      this.boundaryChoices = data;
      let csas = this.boundaryChoices.findBoundaryChoice('csas');
      let vitalSigns = csas.filterConfig('vital_signs');
      this.vitalSigns = vitalSigns;
    });
    this.path = this.$location.path();
  }
}

AppController.$inject = [
  '$scope',
  '$rootScope',
  '$rootRouter',
  '$location',
  '$mdSidenav',
  '$mdMedia',
  'optionsService',
  'layersService'
];
