'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:Profile
 * @description
 * # Profile
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('ProfileCtrl', function($rootScope, $scope, $http) {
  	$scope.profileData = null;

  	$http.get('https://api.dribbble.com/v1/user?access_token=264fd03cd303e3d9fe7adc107a674611c1d0d328c8bf3a0c4ef024b791676590').
	  success(function(data) {
	    $scope.profileData = data;
	    $rootScope.$broadcast('profileData', data);
	  }).
	  error(function() {
	  	$scope.profileData = null;
	  });
});

