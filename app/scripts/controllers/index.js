'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('footerCtrl', function($rootScope, $scope) {
    $scope.date = new Date();
    $scope.backTop = null;

    $scope.checkPosition = function() {
    	angular.element(window).scroll(function() {
    		$scope.currPosition = document.body.scrollTop;

            if ( $scope.currPosition > 300 ) {
                angular.element('#about').addClass('appear');
            }

            if ( $scope.currPosition > 800 ) {
                angular.element('#work').addClass('appear');
            }

            if ( $scope.currPosition > 1300 ) {
                angular.element('#skills').addClass('appear');
            }

            if ( $scope.currPosition > 1800 ) {
                angular.element('#funfacts').addClass('appear');
            }

            if ( $scope.currPosition > 2300 ) {
                angular.element('#contact').addClass('appear');
            }

            $rootScope.$broadcast('currPosition', $scope.currPosition);

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

