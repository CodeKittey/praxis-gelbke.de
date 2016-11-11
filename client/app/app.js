// create a angular module named 'app'
angular.module('app', [
    'ui.bootstrap', // load angular-ui.bootstrap
    'ui.router', // load angular-ui-router
	'uiGmapgoogle-maps'
  ])
  // router options
  .config(['$urlRouterProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider',
    function ($urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    'use strict';

    $locationProvider.html5Mode(true); // allow html5mode routes (no #)
    $urlRouterProvider.otherwise('/'); // if route not found redirect to /

	uiGmapGoogleMapApiProvider.configure({
     key: 'AIzaSyBYuwhY_krrOdzbiyfOKjOkpwJ3atgNEnk',
     v: '3.20', //defaults to latest 3.X anyhow
     libraries: 'weather,geometry,visualization'
   });


  }])
  // after the configuration and when app runs the first time we o some more stuff
  .run(['$rootScope', '$state', function ($rootScope, $state) {
    'use strict';
    // this is available from all across the app
    $rootScope.appName = 'app';

    // make $state available from templates
    $rootScope.$state = $state;
  }]);
