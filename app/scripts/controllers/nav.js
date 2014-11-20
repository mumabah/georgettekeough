'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('navCtrl', function( $scope, $location ) {

	$scope.getClass = function ( path ) {

		if ( $location.path() === path ) {
			return 'active';
		} else {
			return '';
		}

	};

});
