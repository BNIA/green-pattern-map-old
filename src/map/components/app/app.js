import './app.css!';
import template from './app.html!text';
/** The Main App Component Controller*/
function AppController() {
  this.title = "Green Pattern Map";
}

class AppComponent {}
// AppComponent.template = template;
AppComponent.template = template;
AppComponent.controller = AppController;

export default AppComponent;
