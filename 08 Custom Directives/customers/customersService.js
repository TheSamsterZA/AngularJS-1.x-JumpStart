(function() {
  var services = angular.module('app').services;

  services.customersService = function($http) {

    this.getCustomers = function() {
      return $http.get('/api/customers');
    };

    this.getCustomer = function(customerId) {
      return $http.get('/api/customers/' + customerId);
    };

    this.deleteCustomer = function(customerId) {
      return $http.delete('/api/customers/' + customerId);
    };
  };
  services.customersService.$inject = ['$http']; // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
