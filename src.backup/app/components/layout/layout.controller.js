import Tabs from '../../core/tabs.js';
import {clgr, sw, cmos} from '../../../shared/core/phases.js';

export default class LayoutController {
  constructor($rootRouter, $rootScope, optionsService) {
    var self = this;
    this.optionsService = optionsService;
    this.tabs = new Tabs();
    this.$rootRouter = $rootRouter;
    this.$rootScope = $rootScope;
    this.$rootScope.$on('onMapAccess', options => {
      return self.tabChange('/Map', options);
    });
    this.phases = {
      clgr,
      sw,
      cmos
    };
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
    var p = this.optionsService.getLayerFilters();
    console.log(p);
  }
}

LayoutController.$inject = ['$rootRouter', '$rootScope', 'optionsService'];
