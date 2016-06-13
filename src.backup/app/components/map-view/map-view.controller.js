import FlexComponentController from '../../core/flex-component-controller';

export default class MapViewController extends FlexComponentController {
  constructor($element) {
    super($element);
  }
  $onInit() {
    this.flexComponent();
  }
}

MapViewController.$inject = ["$element"];
