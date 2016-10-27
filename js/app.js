define([ 
	'uiRouter', 
	'animate',
	'weather/directives/weather-app'
	], 
	function(){ 
		'use strict'; 
		var app = angular.module('compucorp', ['ngAnimate','ui.router', 'weatherApp']); 	
		
		//include $state and $stateParams on $rootScope
		app.run([
			'$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams)
			{
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		]); 
		return app;
	}
);
