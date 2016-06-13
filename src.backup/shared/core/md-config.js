import {
  primary,
  accent,
  background
} from './colors';

function MdThemeConfig($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary', primary);
  $mdThemingProvider.definePalette('customAccent', accent);
  $mdThemingProvider.definePalette('customBackground', background);
  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .warnPalette('customBackground')
    .backgroundPalette('customBackground');
}

MdThemeConfig.$inject = ["$mdThemingProvider"];

function MdIconConfig($mdIconProvider) {
  $mdIconProvider.fontSet('md', 'material-icons');
}

MdIconConfig.$inject = ["$mdIconProvider"];

export {MdThemeConfig, MdIconConfig};
