'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('jumbotronCtrl', function($scope, $interval) {

  	$scope.triggerHover = function () {
	  	$interval(function () {
	  		angular.element('.continue-btn').toggleClass('hover');
	  	}, 1000);
  	};

  	$scope.triggerHover();


});

