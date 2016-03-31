angular.module('app')
  .controller('contactCtrl', ['$scope', function ($scope) {
    $scope.submitForm = function() {
        if ($scope.testForm.$valid) {
            alert('Form valid!');
        }
        else {
            alert('Form not valid!');
        }
    };
});