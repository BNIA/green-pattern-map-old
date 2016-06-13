import './header.css!';
import template from './header.html!text';
import controller from './header.controller';

let bindings = {
  tabs: '<',
  onTabChange: '&'
};

export default {
  template,
  controller,
  bindings
};
