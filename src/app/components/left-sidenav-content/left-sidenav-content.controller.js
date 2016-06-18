export default class LeftSidenavContentController {
  constructor($rootScope, $element, $mdMedia) {
    this.$element = $element;
    this.$mdMedia = $mdMedia;
    this.title = $rootScope.title;
    this.selected = null;
  }
  selectItem(item) {
    this.selected = item;
    this.onSelect({item});
  }
  navBack() {
    this.onNavBack({});
  }
  $onInit() {
    this.$element.addClass('flex layout-column');
  }
}

LeftSidenavContentController.$inject = ['$rootScope', '$element', '$mdMedia'];
