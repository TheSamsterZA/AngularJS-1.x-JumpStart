/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.ordersController = function($scope, $log, $routeParams, customersFactory, customersService) {
    var customerId = parseInt($routeParams.customerId);
    $scope.customer = null;

    function init() {
      //$scope.customer = customersFactory.getCustomer(customerId);
      customersService.getCustomer(customerId) // AJAX call, returns promise
        .success(function(customer) {
          $scope.customer = customer;
        })
        .error(function(data, status, headers, config) {
          $log.log('HTTP ' + status + ' ' + config.method + ' ' + config.url + '\r\nError: ' +  data.error);
        });
    }

    init();
  };
  controllers.ordersController.$inject = ['$scope', '$log', '$routeParams', 'customersFactory', 'customersService']; // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
