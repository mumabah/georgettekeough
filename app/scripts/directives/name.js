'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:nameDirective
 * @description
 * # nameDirective
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .directive('nameDirective', function() {
  	return {
  		restrict: 'EA',
  		templateUrl: 'views/name.html',
  		controller: 'ProfileCtrl'
  	};


  });