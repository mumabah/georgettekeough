'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('funfactsCtrl', function( $rootScope, $scope, $timeout ) {

  	$scope.coffee = 0;  //6570
  	$scope.codes = 0;  //8000
  	$scope.photos = 0;  //12000

  	var coffeeStopped;
  	var codeStopped;
  	var photosStopped;

		$scope.coffeeCountdown = function() {
	    coffeeStopped = $timeout(function() {
	     	$scope.coffee = $scope.coffee + 20;
	     	$scope.coffeeCountdown();
	    }, 5);

	    if ( $scope.coffee >= 6570 ) {
	    	$scope.stop( coffeeStopped );
	    }

  	};

		$scope.codeCountdown = function() {
	    codeStopped = $timeout(function() {
	     	$scope.codes = $scope.codes + 20;
	     	$scope.codeCountdown();
	    }, 5);

	    if ( $scope.codes >= 8000 ) {
	    	$scope.stop( codeStopped );
	    }

  	};

		$scope.photosCountdown = function() {
	    photosStopped = $timeout(function() {
	     	$scope.photos = $scope.photos + 20;
	     	$scope.photosCountdown();
	    }, 5);

	    if ( $scope.photos >= 12000 ) {
	    	$scope.stop( photosStopped );
	    }

  	};

  	// watch for the currposition from the index controller
  	$rootScope.$watch('currPosition', function(args) {
  		console.log(args);

	  	if ( args !== null ) {
	  		$scope.coffeeCountdown();
		  	$scope.codeCountdown();
		  	$scope.photosCountdown();
  		}

	  });


  	$scope.stop = function( name ){
   		$timeout.cancel( name );
    };

  });

