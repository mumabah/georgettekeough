'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:profileDirective
 * @description
 * # profileDirective
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .directive('profile', function() {
  	return {
  		restrict: 'EA',
  		templateUrl: 'views/about.html',
  		controller: 'ProfileCtrl'
  	};


  });