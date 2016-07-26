import './app.globals';
import angular from 'angular';

// Import Configuration
import {routeProviderConfig} from './app.config';
import mdThemeConfig from '../shared/md-theme-config';
import mdIconConfig from '../shared/md-icon-config';

// Import Components
import AppComponent from './components/app/app.component';
import LeftSidenavContentComponent from
  './components/left-sidenav-content/left-sidenav-content.component';
import RightSidenavContentComponent from
  './components/right-sidenav-content/right-sidenav-content.component';
import OverlayComponent from
  './components/overlay/overlay.component';

// Import services
import OptionsService from './services/options.service';
import LayersService from './services/layers.service';

// Load dependences:
// Other libs, and internal modules
let dependencies = [
  'ngMaterial',
  'ngRoute',
  'landingPage',
  'mapPage',
  'angularUtils.directives.dirDisqus',
  'jkAngularCarousel'
];

let app = angular.module('app', dependencies);

// Configure app
// app.value('$routerRootComponent', 'app'); // root to ng-component-router
app.config(routeProviderConfig);
app.config(mdThemeConfig);
app.config(mdIconConfig);

// Load components into the app
app.component('app', AppComponent);
app.component('leftSidenavContent', LeftSidenavContentComponent);
app.component('rightSidenavContent', RightSidenavContentComponent);
app.component('overlay', OverlayComponent);

// Load services into the app
app.service('optionsService', OptionsService);
app.service('layersService', LayersService);

// Bootstrap the app
angular.element(document).ready(() => {
  document.body.setAttribute('layout', 'column');
  let appEle = document.getElementsByTagName('app')[0];
  appEle.setAttribute('layout', 'column');
  appEle.setAttribute('flex', 100);
  angular.bootstrap(document.body, ['app'], {
    strictDi: true
  });
  // Add flex to the component here if needed , etc.
});

export default app;
