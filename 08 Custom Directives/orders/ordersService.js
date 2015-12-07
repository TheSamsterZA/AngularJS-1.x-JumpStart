(function() {
  var services = angular.module('app').services;

  services.ordersService = function($http) {

    this.getOrders = function() {
      return $http.get('/api/orders');
    };
  };
  services.ordersService.$inject = ['$http']; // Syntax to deal with minification issue

  angular.module('app') // Reference module
    .service(services);

}()); // Self-invoked anonymous function; prevents polluting global namespace
