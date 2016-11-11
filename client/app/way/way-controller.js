angular.module('app')
  .controller('WayCtrl', ['$scope', function ($scope) {
    // here we define the items to be repeated in the template
$scope.map = { center: { latitude: 49.485050, longitude: 8.293330 }, zoom: 16 };
$scope.markers = [];
$scope.markers[0] = {id: 1, latitude: 49.485050, longitude: 8.293330};

  }]);


//1,Am Dreschpl.,67133 Maxdorf
//49.485050  8.293330
