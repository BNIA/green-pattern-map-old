import './header.css!';
import template from './header.html!text';
import controller from './header.controller';

let bindings = {
  tab: '<',
  onTabChange: '&'
};

export default {
  template,
  controller,
  bindings
};
