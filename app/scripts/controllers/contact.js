'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
  .controller('contactCtrl', function($scope, $http) {

    $scope.result = 'hidden';
    $scope.resultMessage = {};
    $scope.formData = {};
    $scope.submitButtonDisabled = false;
    $scope.submitted = false;

    $scope.submit = function( contactForm ) {
      $scope.submitted = true;
      $scope.submitButtonDisabled = true;

      if ( contactForm ) {
        $http({
          method: 'POST',
          url: '../../api/contact-form.php',
          data: $.param($scope.input),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .success( function ( data ) {
          console.log(data);
          if ( data.success ) {
            $scope.submitButtonDisabled = true;
            $scope.resultMessage = data.message;
            $scope.result = 'bg-success';
          } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = data.message;
            $scope.result = 'bg-danger';
          }

        });

      } else {
        $scope.submitButtonDisabled = false;
        $scope.resultMessage = 'Failed';
        $scope.result = 'bg-danger';
      }

    };



  	// $scope.success = false;
  	// $scope.error = false;

  	// $scope.sendMessage = function( input ) {
   //    // console.log()
  	// 		$http({
  	// 			method: 'POST',
  	// 			url: '/processForm.php',
  	// 			data: input,
  	// 			headers: {
  	// 				'Content-Type': 'application/x-www-form-urlencoded'
  	// 			}
  	// 		})
  	// 		.success( function(data) {
  	// 			if ( data.success ) {
  	// 				$scope.success = true;
  	// 			} else {
  	// 				$scope.error = true;
  	// 			}
  	// 		});
  	// };







  	// $scope.contactForm = function(isValid) {
  	// 	if ( isValid ) {
  	// 		console.log('is valid');
  	// 	}

  	// };

  });

