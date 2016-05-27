export default class LandingViewController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  mapAccess(options) {
    this.$rootScope.emit('onMapAccess', {options});
  }
}

LandingViewController.$inject = ['$rootScope'];
