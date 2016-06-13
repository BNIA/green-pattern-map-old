import './layout.css!';
import template from './layout.html!text';
import controller from './layout.controller';

let bindings = {
  onMapAccess: '&'
};

export default {
  template,
  controller,
  bindings
};
