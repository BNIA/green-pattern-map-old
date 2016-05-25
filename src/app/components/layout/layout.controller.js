export default class LayoutController {
  constructor($rootRouter) {
    this.$rootRouter = $rootRouter;
  }
  reroute(route, options = {}) {
    this.$rootRouter.navigate([route, options]);
  }
  tabChange(tab) {
    this.tab = tab;
    this.reroute(this.tab);
  }
  $onInit() {
    this.reroute(this.tab);
  }
}

LayoutController.$inject = ['$rootRouter'];
