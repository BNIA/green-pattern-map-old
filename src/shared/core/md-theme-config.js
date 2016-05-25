import {
  primary,
  accent,
  background
} from './colors';

export default function MdThemeConfig($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary', primary);
  $mdThemingProvider.definePalette('customAccent', accent);
  $mdThemingProvider.definePalette('customBackground', background);
  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .backgroundPalette('customBackground');
}

MdThemeConfig.$inject = ["$mdThemingProvider"];
