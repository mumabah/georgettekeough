'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('footerCtrl', function($scope) {
    $scope.date = new Date();
    $scope.backTop = null;

    $scope.checkPosition = function() {
    	$(window).scroll(function() {
    		$scope.currPosition = document.body.scrollTop;

    	 	if ( $scope.currPosition > 1000 ) {
    			$scope.backTop = true;
    			$scope.$apply();
    		} else {
    			$scope.backTop = false;
    			$scope.$apply();

    		}
    	});
    };

  	$scope.checkPosition();

});

