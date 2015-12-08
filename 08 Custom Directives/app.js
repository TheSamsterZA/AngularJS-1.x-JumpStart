(function() {
  var app = angular.module('app', ['ngRoute', 'ngAnimate']); // Define module, with dependencies

  // Define custom object containers for controllers, factories, services, directives
  app.controllers = {};
  app.controller(app.controllers);

  app.factories = {};
  app.factory(app.factories);

  app.services = {};
  app.service(app.services);

  app.directives = {};
  app.directive(app.directives);

  app.config(function($routeProvider) {
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
    app.config.$inject = ['$routeProvider'] // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
