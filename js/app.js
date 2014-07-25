var shoppingcartApp = angular.module('shoppingcartApp', [
  'ngRoute',
  'shoppingcartController'
]);
shoppingcartApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:name', {
        templateUrl: 'partials/phone-details.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: 'home'
      });
  }]);
