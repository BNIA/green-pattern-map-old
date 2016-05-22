import {primary, accent, background} from './core/colors';

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

export {AppMdThemeConfig};
