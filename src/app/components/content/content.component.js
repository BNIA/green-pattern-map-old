// import './layout.css';
import template from './content.html!text';
import controller from './content.controller';

let bindings = {
  tab: '<',
  onTabChange: '&'
};

export default {
  template,
  controller,
  bindings
};
