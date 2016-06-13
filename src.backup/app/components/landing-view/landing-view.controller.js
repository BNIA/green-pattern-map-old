export default class LandingViewController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  mapAccess(options) {
    console.log("lv map access");
    this.$rootScope.$emit('onMapAccess', {options});
  }
}

LandingViewController.$inject = ['$rootScope'];
