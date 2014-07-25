var shoppingcartController = angular.module('shoppingcartController', []);

shoppingcartController.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('json/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

shoppingcartController.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/' + $routeParams.name + '.json').success(function(data) {
      $scope.phones = data;
    });

  }]);
