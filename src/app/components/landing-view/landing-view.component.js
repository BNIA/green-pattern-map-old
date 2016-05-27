// import './landing-view.css!';
import controller from './landing-view.controller';
import template from './landing-view.html!text';

let bindings = {
  onMapAccess: '&'
};

export default {
  template,
  controller,
  bindings
};
