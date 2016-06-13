export default class HeaderController {
  constructor() {
    this.title = "Green Pattern Map";
  }
  tabChange(tab) {
    this.tab = tab;
    this.onTabChange({tab});
  }
}

HeaderController.$inject = [];
