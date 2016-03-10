angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
 
    $stateProvider.state('fotos', { // this is a name for our route
      url: '/fotos', // the actual url path of the route
      templateUrl: 'app/fotos/fotos.html', // the template that will load
      controller: 'FotosCtrl' // the name of the controller to use
    });
  }]);