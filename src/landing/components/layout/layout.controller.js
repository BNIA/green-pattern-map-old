export default class LayoutController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
  mapAccess(options) {
    this.$rootScope.$emit('onMapAccess');
    console.log("mapACCESSS");
    this.onMapAccess({options});
  }
}

LayoutController.$inject = ['$rootScope'];
