'use strict';

/**
 * @ngdoc function
 * @name georgettekeoughcomApp.controller:Work
 * @description
 * # Work
 * Controller of the georgettekeoughcomApp
 */

angular.module('georgettekeoughcomApp')
  .filter('tagFilter', function() {
  	return function(input, tags) {
  		// Output array to send back to the view
  		var out = [];
  		// Loop over the input list - in this case all the shots
  		angular.forEach(input, function(shot) {
  			// Set a variable to break our tag loops
  			var breakLoop = false;
  				// Loop over all the tags for the current shot
  				angular.forEach(shot.tags, function(tag) {
  					// Check if breakloop variable is false to keep looping
  					if(!breakLoop) {
  						// Loop over our tag model object
	  					angular.forEach(tags, function(model) {
	  						// Check if the current tag on the current shot is equal to the model tag and if the tag's set property is true
	  						if(tag === model.name && model.set) {
	  							// Push the shot to the output array
	  							out.push(shot);
	  							// Set the breakLoop variable to true to stop the loop
	  							breakLoop = true;
	  						}
	  					});
  					}
  				});
  		});
  		// Return output array to view
  		return out;
  	};
});

angular.module('georgettekeoughcomApp')
  .controller('WorkCtrl', function($rootScope, $scope, $http, $q) {
  	$scope.shotsData = [];
  	$scope.tags = [];
  	$scope.pageCount = null;
  	$scope.getit = [];

  	$scope.getShots = function( page ) {

  		for (var i = 1; i <= page.length; i++) {
  			$scope.getit[i] = $http.get('https://api.dribbble.com/v1/user/shots?page=' + i + '&access_token=264fd03cd303e3d9fe7adc107a674611c1d0d328c8bf3a0c4ef024b791676590');
  		}

  		$q.all($scope.getit).then(function( data ) {
			    var allShots = [];

			    angular.forEach( data, function ( elem ) {
			    	allShots = allShots.concat(elem.data);
			    });

			    $scope.shotsData = allShots;
			    $scope.findLink();
		    	$scope.buildTags();

  		}, function() {

  		});


	  	// $http.get('https://api.dribbble.com/v1/user/shots?page=' + page + '&access_token=264fd03cd303e3d9fe7adc107a674611c1d0d328c8bf3a0c4ef024b791676590').
		  // success(function(data) {
		  //   $scope.shotsData = data;
		  //   $scope.findLink();

		  //   $scope.buildTags();
		  // }).
		  // error(function() {
		  // 	$scope.shotsData = null;
		  // });

  	};

  	// we want to trigger the getShots function and pass the current page count to it on page load so that it displays the first page automatically

  	// watch for the pageCount variable to get loaded
  	$scope.$watch('pageCount', function() {
  		if ($scope.pageCount !== null ) {
  			$scope.getShots($scope.pageCount);
  		}
  	});


  	// watch for the shots_count property that is coming from the user object on the profileCtrl
	  $rootScope.$watch('profileData', function(args) {
	  	if ( args !== null ) {
	  		$scope.profileData = args; // set variable equal to all the properties of the user object that are coming from the profileCtrl

	  		// set pageCount variable equal to the return from the getPageCount function
	  		$scope.pageCount = $scope.getPageCount($scope.profileData.shots_count);
  		}

	  });

	  // get the page count, pass is the total amount of shots
	  $scope.getPageCount = function(	shotCount ) {
	  	var pageCount = Math.ceil(shotCount / 12), // total shots / shots that fit in 1 page
	  			pageModel = [];

	  	// loop through the amount of pages and push its current index + 1 to the pageModel array
	  	for (var i = 1; i <= pageCount; i++) {
	  		pageModel.push(i);
	  	}

	  	// return the pageModel array when you call this function
	  	return pageModel; // this will equal [1, 2, 3]

	  };

	  $scope.findLink = function () {
	  	//for each item in the data array
	  	angular.forEach($scope.shotsData, function (shot, index) {
	  		// check if the description property contains a link on the string
	  		if (shot.description.indexOf('f="') !== -1) {
	  			var sliiptArr = shot.description.split('f="');
					$scope.shotsData[index].webLink = sliiptArr[1].split('"')[0];
	  		}

	  	});

	  };

	  // build a tag of unique tags
	  $scope.buildTags = function() {
	  	$scope.tags = [];
	  	var uniqueTags = [];

	  	// loop through each shot object
	  	angular.forEach($scope.shotsData, function (shot) {

	  		//loop through each tag object/property inside the current shot
	  		angular.forEach(shot.tags, function (tag) {
	  			// check if the new uniqueTags empty array has a tag string that equals the same tag string that we are currently on
		  		if ( uniqueTags.indexOf(tag) === -1 ) {
		  			// if the tag is not on the array yet then push it to it
		  			uniqueTags.push(tag);
		  		}
	  		});

	  	});
	  	// loop through each item on the new unique tag array
	  	angular.forEach(uniqueTags, function (tag) {
	  		// make a new array called tags and push an object with the name of the current unique tag and a set true which means it is displayed by default
	  		$scope.tags.push({
	  			name: tag,
	  			set: false
	  		});
	  	});

	  };



});

