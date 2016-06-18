import landingPageTemplate from './templates/landing-page.html!text';
import mapPageTemplate from './templates/map-page.html!text';

let routeProviderConfig = function($routeProvider) {
  $routeProvider.when('/home', {
    template: landingPageTemplate
  }).when('/map', {
    template: mapPageTemplate
  }).otherwise({
    redirectTo: '/home'
  });
};

routeProviderConfig.$inject = ['$routeProvider'];

export {routeProviderConfig};
