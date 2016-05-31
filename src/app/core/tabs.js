import findIndex from 'lodash/findIndex';

export default class Tabs {
  constructor(keys = ['/Home', '/Map'], vals = ['Home', 'Map'],
    activeIndex = 0) {
    this.keys = keys;
    this.vals = vals;
    this.activeIndex = activeIndex;
    this.activeKey = this.keys[this.activeIndex];
    this.activeVal = this.vals[this.activeIndex];
  }
  findTabIndex(key) {
    return findIndex(this.keys, t => {
      return t === key;
    });
  }
  changeActiveTab(key) {
    this.activeIndex = this.findTabIndex(key);
    this.activeKey = this.keys[this.activeIndex];
    this.activeVal = this.vals[this.activeIndex];
  }
}
