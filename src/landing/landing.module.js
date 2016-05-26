import angular from 'angular';
import './landing.globals';

import LandingController from './landing.controller';

import LayoutComponent from './components/layout/layout.component';
import MapCardComponent from './components/map-card/map-card.component';
import GpbCardComponent from './components/gpb-card/gpb-card.component';
import PhasesCardComponent from
  './components/phases-card/phases-card.component';
import DescCardComponent from './components/desc-card/desc-card.component';

var dependencies = ['ngMaterial'];

let landing = angular.module('landing', dependencies);

landing.controller('LandingController', LandingController);

landing.component('landingLayout', LayoutComponent);
landing.component('landingMapCard', MapCardComponent);
landing.component('landingGpbCard', GpbCardComponent);
landing.component('landingPhasesCard', PhasesCardComponent);
landing.component('landingDescCard', DescCardComponent);

export default landing;
