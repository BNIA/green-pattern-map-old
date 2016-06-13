import './left-sidenav-content.css!';
import controller from './left-sidenav-content.controller';
import template from './left-sidenav-content.html!text';

let bindings = {
  layerFilters: '<',
  onLayerFiltersChange: '&',
  vitalSigns: '<',
  onVitalSignsChange: '&',
  onSelect: '&'
};

export default {
  controller,
  template,
  bindings
};
