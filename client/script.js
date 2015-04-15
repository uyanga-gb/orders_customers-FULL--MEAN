
  var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/customers', {
            templateUrl: 'partials/customers.html',
            controller: 'customersController',
        })
        .when('/orders',{
            templateUrl: 'partials/orders.html',
            // controller: 'customersController',
            controller: 'ordersController',
            controller: 'customersController',
        })
     
        .otherwise({
          redirectTo: '/'
        });
    });