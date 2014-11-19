'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:Work
 * @description
 * # Work
 * Controller of the georgettekeoughcomApp
 */

angular.module('georgettekeoughcomApp')
  .controller('ModalCtrl', function ($scope, $modal) {

  $scope.open = function () {

      $scope.modalInstance = $modal.open({
        templateUrl: '../views/modal.html',
        scope: $scope,
        size: 'lg',
        controller: 'WorkCtrl',
        closable: true
      });

  };

  $scope.close = function(){
    $scope.modalInstance.close();
  };

});




