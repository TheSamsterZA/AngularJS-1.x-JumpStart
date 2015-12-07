(function() {
  angular.module('app', ['ngRoute', 'ngAnimate']); // Define module, with dependencies

  angular.module('app')
    .controllers = {}; // Custom object container for controllers
  angular.module('app')
    .factories = {}; // Custom object container for factories
  angular.module('app')
    .services = {}; // Custom object container for services
  angular.module('app')
    .directives = {}; // Custom object container for directives

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
            .when('/orders',
            {
              controller: 'allOrdersController',
              templateUrl: 'orders/orders-all.html'
            })
          .otherwise({redirectTo: '/'})
        });
    angular.module('app').config.$inject = ['$routeProvider'] // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
