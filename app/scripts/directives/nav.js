'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:profileDirective
 * @description
 * # profileDirective
 * Controller of the georgettekeoughcomApp
 */
angular.module('georgettekeoughcomApp')
	.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        angular.element('body').animate({scrollTop: $target.offset().top - 50 + 'px'}, 'slow');

        if ( $elm.parents('.navbar-collapse').hasClass('in') ) {
          $elm.parents('.navbar-collapse').removeClass('in');
        }

      });
    }
  };
});