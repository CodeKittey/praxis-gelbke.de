angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('way', { // this is a name for our route
      url: '/way', // the actual url path of the route
      templateUrl: 'app/way/way.html', // the template that will load
      controller: 'WayCtrl' // the name of the controller to use
    });
  }]);
