export default class LeftSidenavContentController {
  constructor($rootScope, $element) {
    this.$element = $element;
    this.title = $rootScope.title;
    this.selected = null;
  }
  selectItem(item) {
    this.selected = item;
    this.onSelect({item});
  }
  $onInit() {
    this.$element.addClass('flex layout-column');
  }
}

LeftSidenavContentController.$inject = ['$rootScope', '$element'];
