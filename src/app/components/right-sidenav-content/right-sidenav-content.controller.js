export default class RightSidenavContentController {
  constructor($element, $mdMedia) {
    this.$element = $element;
    this.$mdMedia = $mdMedia;
  }
  $onInit() {
    this.$element.addClass('flex layout-column');
  }
  select(opt) {
    if (this.selected.type === 'boundary-choice-config') {
      opt.toggleIsOn();
    }
    this.onSelect({opt});
  }
  navBack() {
    console.log("hi");
    this.onNavBack();
  }
}

RightSidenavContentController.$inject = ["$element", "$mdMedia"];
