import './app.css!';
import controller from './app.controller';
import template from './app.html!text';

let bindings = {
  layerFilters: '<',
  boundaryChoices: '<',
  onLayerFiltersSelect: '&',
  onBoundaryChoicesSelect: '&'
};

export default {
  controller,
  template,
  bindings
};
