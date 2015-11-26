/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.ordersController = function($scope, $routeParams, customersFactory, customersService) {
    var customerId = parseInt($routeParams.customerId);
    $scope.customer = null;

    function init() {
      //$scope.customer = customersFactory.getCustomer(customerId);
      $scope.customer = customersService.getCustomer(customerId);
    }

    init();
  };
  controllers.ordersController.$inject = ['$scope', '$routeParams', 'customersFactory', 'customersService']; // Syntax to deal with minification issue

  angular.module('app') // Reference module
    .controller(controllers);

}()); // Self-invoked anonymous function; prevents polluting global namespace
