angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';

    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutCtrl' // the name of the controller to use
    });
  }]);
