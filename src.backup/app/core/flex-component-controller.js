export default class FlexComponentController {
  constructor($element) {
    this.$element = $element;
  }
  flexComponent() {
    this.$element.addClass('flex layout-column');
  }
}

FlexComponentController.$inject = ["$element"];
