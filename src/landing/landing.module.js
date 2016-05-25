import './globals';
import angular from 'angular';
import AppComponent from './components/app/app.component';
import template from './landing.html!text';

var LandingController = function() {};
LandingController.$inject = [];

var LandingRoute = function($routeProvider) {
  $routeProvider.when('/landing', {
    template: template,
    conroller: 'LandingController'
  });
};

LandingRoute.$inject = ['$routeProvider'];

let landing = angular.module('app.landing', ['ngRoute', 'ngMaterial']);

landing.controller('LandingController', LandingController);

landing.component('myApp', AppComponent);
landing.config(LandingRoute);

export default landing;
