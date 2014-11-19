'use strict';

/**
 * @ngdoc overview
 * @name georgettekeoughcomApp
 * @description
 * # georgettekeoughcomApp
 *
 * Main module of the application.
 */
angular
  .module('georgettekeoughcomApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.tpls'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/#profile', {
        templateUrl: 'views/profile.html',
        controller: 'Profile'
      })
      .when('/#work', {
        templateUrl: 'views/work.html',
        controller: 'Work'
      })
      .when('/#skills', {
        templateUrl: 'views/skills.html',
        controller: 'Skills'
      })
      .when('/#contact', {
        templateUrl: 'views/contact.html',
        controller: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
