import './layer-filters.css!';
import controller from './layer-filters.controller';
import template from './layer-filters.html!text';

let bindings = {
  layerFilters: '<',
  onLayerFiltersChange: '&'
};

export default {
  controller,
  template,
  bindings
};
