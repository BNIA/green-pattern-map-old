export default class LayoutController {
  constructor($rootRouter, $rootScope) {
    this.tab = '/Home';
    this.$rootRouter = $rootRouter;
    this.$rootScope = $rootScope;
    $rootScope.$on('onMapAccess', this.mapAccess);
  }
  reroute(route, options = {}) {
    this.$rootRouter.navigate([route, options]);
  }
  tabChange(tab, options = {}) {
    this.tab = tab;
    this.reroute(this.tab, options);
  }
  mapAccess(options = {}) {
    console.log("tried");
    this.tabChange('/Map', options);
  }
  $onInit() {
    this.reroute(this.tab);
  }
}

LayoutController.$inject = ['$rootRouter', '$rootScope'];
