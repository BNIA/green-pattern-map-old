import Tabs from '../../core/tabs.js';

export default class LayoutController {
  constructor($rootRouter, $rootScope) {
    var self = this;
    this.tabs = new Tabs();
    this.$rootRouter = $rootRouter;
    this.$rootScope = $rootScope;
    this.$rootScope.$on('onMapAccess', options => {
      return self.tabChange('/Map', options);
    });
  }
  reroute(route, options = {}) {
    console.log(route);
    this.$rootRouter.navigate([route, options]);
  }
  tabChange(tab, options = {}) {
    this.tabs.changeActiveTab(tab);
    this.reroute(this.tabs.activeKey, options);
  }
  $onInit() {
    this.reroute(this.tabs.activeTab);
  }
}

LayoutController.$inject = ['$rootRouter', '$rootScope'];
