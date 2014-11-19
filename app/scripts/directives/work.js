'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:profileDirective
 * @description
 * # profileDirective
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .directive('work', function() {
  	return {
  		restrict: 'E',
  		templateUrl: 'views/work.html',
  		controller: 'WorkCtrl'
  	};


  });