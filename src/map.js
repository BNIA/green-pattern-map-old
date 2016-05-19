import angular from 'angular';
import 'angular-animate';
import 'angular-messages';
import 'angular-material';
import {
  primary,
  accent,
  background
} from './core/colors';
import AppComponent from './map/components/app/app.js';

console.log(AppComponent);

let app = angular.module('app', ['ngMaterial'])
  .controller('AppController', ['$scope', function(/* $scope*/) {}]);

app.component('myApp', AppComponent);

app.config($mdThemingProvider => {
  $mdThemingProvider.definePalette('customPrimary', primary);
  $mdThemingProvider.definePalette('customAccent', accent);
  $mdThemingProvider.definePalette('customBackground', background);

  $mdThemingProvider
    .theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .backgroundPalette('customBackground');
});

export {app};
