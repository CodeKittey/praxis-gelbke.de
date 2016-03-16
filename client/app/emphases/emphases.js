angular.module('app')
.config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('emphases', { // this is a name for our route
      url: '/emphases', // the actual url path of the route
      templateUrl: 'app/emphases/emphases.html', // the template that will load
      controller: 'EmphasesCtrl' // the name of the controller to use
    })
  }]);