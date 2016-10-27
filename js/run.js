define([ 
	'app',
	'home/controller' 
	],
	function(app, HomeController){
		'use strict'; 
		require(['domReady!'], function(document){
			
			//specify initial state of application 
			app.config(function($stateProvider, $urlRouterProvider){
				$stateProvider.state('home', { 
					url: '/', 
					templateUrl: 'js/home/views/index.html',
					controller: ['$scope', HomeController] 
				}); 
			}); 
			return  angular.bootstrap(document.body, ['compucorp']);  
		});
	}
);
