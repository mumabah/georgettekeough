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

	// click event for mobile menu
	$scope.pushLeft = function ($event) {

   	var menuLeft = angular.element( '#mobile-menu' ),
   			body = angular.element('body');

    	angular.element($event.target).toggleClass('active');
	    body.toggleClass('mobile-menu-push-toright');
	    menuLeft.toggleClass('mobile-menu-open');

	    $scope.closeMobileNv();

	};

	// close the mobile nav when you click on a section
	$scope.closeMobileNv = function () {
		var mobileBtn = angular.element('.navbar-toggle');

		angular.element('.mobile-menu a').on('click', function () {
			console.log('clicked a nav item');
			mobileBtn.trigger('click');
		});

	};


});
