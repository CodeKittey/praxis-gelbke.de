angular.module('app')
.controller('EmphasesCtrl', ['$scope', function ($scope, $location) {
    // here we define the items to be repeated in the template
    $scope.articles = [
      {id: 1, name: 'Init Blog', date: '17.10.2015',teaser: 'Der erste Blogartikel', tags: ['#new', 'coding']}    ];
      $scope.getDetails= function(id) {
        $location.path('/blog/' + id);
      };
  }]);