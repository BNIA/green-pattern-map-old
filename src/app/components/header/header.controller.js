import {appTitle} from '../../../shared/core/titles.js';
import {findTabIndex} from '../../../shared/core/tabs.js';

export default class HeaderController {
  constructor() {
    this.title = appTitle;
    this.index = 0;
  }
  tabChange(tab) {
    this.tab = tab;
    // this.index = findTabIndex(this.tab);
    console.log(this.index);
    this.onTabChange({tab});
  }
  changeTabIndex() {
    this.index = findTabIndex(this.tab);
  }
  $onChanges(changesObj) {
    if (changesObj.tab) {
      console.log("CHANGED");
      this.changeTabIndex();
    }
  }
  $onInit() {
    this.changeTabIndex();
  }
}

HeaderController.$inject = [];
