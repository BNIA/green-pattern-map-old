import FlexComponentController from '../../core/flex-component-controller';

export default class MapViewController extends FlexComponentController {
  constructor($element) {
    super($element);
  }
  $onInit() {
    console.log("FLEXING");
    this.flexComponent();
  }
}

MapViewController.$inject = ["$element"];
