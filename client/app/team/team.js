angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
 
    $stateProvider.state('team', { // this is a name for our route
      url: '/team', // the actual url path of the route
      templateUrl: 'app/team/team.html', // the template that will load
      controller: 'TeamCtrl' // the name of the controller to use
    });
  }]);