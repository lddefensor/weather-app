define([], function(){

 /**  
  * If the user denies to share the location, show a little input form for entering postcode or country, 
  * and display the weather based on that location. 
  */
	
	var getLocation = angular.module('getLocation', []);
	getLocation.directive('getLocation', function(){
		return {
			restrict: 'E',
			templateUrl: 'js/weather/directives/html/get-location.html',
			controller: function($scope, $http){
				console.log('manually check location');   
				$scope.errorMessage = null; 
				$scope.countries = [];
				$http.get('js/weather/countries.json').success(function(countries){ $scope.countries = countries; }); 
			}, 
		};
	});
	 
	return getLocation;	 
});
