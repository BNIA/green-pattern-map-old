//import './header.css!';
import template from './header.html!text';
/** The Main Header Component Controller*/
function HeaderController() {
  this.title = "Green Pattern Map";
}

class HeaderComponent {}
HeaderComponent.template = template;
HeaderComponent.controller = HeaderController;

export default HeaderComponent;
