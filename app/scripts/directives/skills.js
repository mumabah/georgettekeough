'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:nameDirective
 * @description
 * # nameDirective
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .directive('skills', function() {
  	return {
  		restrict: 'EA',
  		templateUrl: 'views/skills.html',
  		controller: 'skills'
  	};


  });