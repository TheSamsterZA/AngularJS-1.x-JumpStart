(function() {

  angular.module('app', ['ngRoute']) // Define module, with dependencies
    .controllers = {}; // Custom object container for controllers

    angular.module('app')
        .config(function($routeProvider) {
          $routeProvider
          .when('/',
            {
              controller: 'customersController',
              templateUrl: 'customers/customers.html'
            })
            .when('/orders/:customerId',
              {
                controller: 'ordersController',
                templateUrl: 'orders/orders.html'
              })
          .otherwise({redirectTo: '/'})
        });
    angular.module('app').config.$inject = ['$routeProvider'] // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
