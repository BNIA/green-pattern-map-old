import FlexComponentController from '../../core/flex-component-controller';
import options from '../../../shared/core/options.js';

export default class LayersViewController extends FlexComponentController {
  constructor($element) {
    super();
    this.boundaryChoices = options.opts.boundaryChoices;
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
