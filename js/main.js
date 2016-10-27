require.config({
	waitSeconds: 30,
	paths: 
	{
		/*
		 * Libraries
		 */
		angular: 'libs/angular',
		uiRouter: 'libs/angular-ui-router',
		animate: 'libs/angular-animate',
		domReady: 'libs/domReady',
		
		/*
		 * apps
		 */
		app: 'app' 
	},
	shim: 
	{
		animate: {
			deps: ['angular']
		},
		uiRouter: {
			deps: ['angular']
		},
		app: {
			deps: ['angular', 'uiRouter', 'animate']
		} 
	},
	deps: ['run']
});
