(function() {
  var services = angular.module('app').services;

  services.customersService = function($http) {

    this.getCustomers = function() {
      return $http.get('/api/customers');
    };

    this.getCustomer = function(customerId) {
      return $http.get('/api/customers/' + customerId);
    }
  };
  services.customersService.$inject = ['$http']; // Syntax to deal with minification issue

  angular.module('app') // Reference module
    .service(services);

}()); // Self-invoked anonymous function; prevents polluting global namespace
