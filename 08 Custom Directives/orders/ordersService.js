(function() {
  var services = angular.module('app').services;

  services.ordersService = function($http) {

    this.getOrders = function() {
      return $http.get('/api/orders');
    };
  };
  services.ordersService.$inject = ['$http']; // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
