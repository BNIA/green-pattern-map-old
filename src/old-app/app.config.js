import {primary, accent, background} from './core/colors';
import template from './app.html!text';
import AppController from './app.controller';

var AppMdThemeConfig = function($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary', primary);
  $mdThemingProvider.definePalette('customAccent', accent);
  $mdThemingProvider.definePalette('customBackground', background);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .backgroundPalette('customBackground');
};
AppMdThemeConfig.$inject = ["$mdThemingProvider"];

var AppRouteConfig = function($routeProvider) {
  $routeProvider.when('/', {
    template: template,
    controller: 'AppController'
  });
  $routeProvider.otherwise({
    redirectTo: '/home'
  });
};

AppRouteConfig.$inject = ["$routeProvider"];

export {AppMdThemeConfig, AppRouteConfig};
