angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {
      'use strict';

      $stateProvider.state('contact', { // this is a name for our route
        url: '/contact', // the actual url path of the route
        templateUrl: 'app/contact/contact.html', // the template that will load
        controller: 'contactCtrl' // the name of the controller to use
      });
    }]);
