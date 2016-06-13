import {appTitle} from '../../../shared/core/titles.js';

export default class HeaderController {
  constructor() {
    this.title = appTitle;
  }
  tabChange(tab) {
    this.tabs.changeActiveTab(tab);
    this.onTabChange({tab});
  }
  changeTabIndex() {
    // this.index = findTabIndex(this.tab);
  }
  $onChanges(changesObj) {
    if (changesObj.tab) {
      // console.log("CHANGED");
      // this.changeTabIndex();
    }
  }
  $onInit() {
    // this.changeTabIndex();
  }
}

HeaderController.$inject = [];
