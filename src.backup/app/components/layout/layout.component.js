import './layout.css!';
import template from './layout.html!text';
import controller from './layout.controller';
import $routeConfig from './layout.route.js';

let bindings = {
  tab: '<',
  onTabChange: '&'
};

export default {
  template,
  controller,
  bindings,
  $routeConfig
};
