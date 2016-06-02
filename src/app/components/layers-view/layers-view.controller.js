import FlexComponentController from '../../core/flex-component-controller';
import {cmos, sw, gl} from '../../../shared/core/phases';

export default class LayersViewController extends FlexComponentController {
  constructor($element) {
    super();
    this.phases = [cmos, sw, gl];
    this.activeItem = null;
    this.$element = $element;
  }
  assignActiveItem(key) {
    this.activeItem = key;
  }
  $onInit() {
    this.flexComponent();
  }
}

LayersViewController.$inject = ['$element'];
