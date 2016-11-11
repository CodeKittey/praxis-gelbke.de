angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('open', { // this is a name for our route
      url: '/open', // the actual url path of the route
      templateUrl: 'app/open/open.html', // the template that will load
      controller: 'OpenCtrl' // the name of the controller to use
    });
  }]);
