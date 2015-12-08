/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.customersController = function($scope, $log, customersFactory, customersService) {
    $scope.customers = [];

    function init() {
      //$scope.customers = customersFactory.getCustomers();
      customersService.getCustomers() // AJAX call, returns promise
        .success(function(customers) {
          $scope.customers = customers;
        })
        .error(function(data, status, headers, config) {
          $log.log('HTTP ' + status + ' ' + config.method + ' ' + config.url + '\r\nError: ' +  data.error);
        });
    }

    init();

    // Initial default sort
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.sortCustomers = function(propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    $scope.deleteCustomer = function(customerId) {
      customersService.deleteCustomer(customerId)
        .success(function(status) {
          if (status) {
            for (var i = 0; i < $scope.customers.length; i++){
              if ($scope.customers[i] === customerId) {
                $scope.customers.splice(i, 1);
                break;
              }
            }
          } else {
            $window.alert('Unable to delete customer');
          }
        })
        .error(function(data, status, headers, config) {
          $log.log('HTTP ' + status + ' ' + config.method + ' ' + config.url + '\r\nError: ' +  data.error);
        });
    };
  };
  controllers.customersController.$inject = ['$scope', '$log', 'customersFactory', 'customersService']; // Syntax to deal with minification issue

  // Alternative syntax to deal with minification issue
  // controllers.customersController = ['$scope', function($scope) {
  //   $scope.customers = [
  //     {id: 1, name: 'Sam', city: 'New York', orderTotal: 99.8732, joined: '2000-12-02'},
  //     {id: 2, name: 'Retard', city: 'Chicago', orderTotal: 327.1784, joined: '2007-04-26'},
  //     {id: 3, name: 'Karusha', city: 'Atlanta', orderTotal: 5.2, joined: '2012-07-14'},
  //     {id: 4, name: 'Sadhika', city: 'California', orderTotal: 452.946, joined: '2008-01-04'},
  //   ];
  //
  //   // Initial default sort
  //   $scope.sortBy = 'name';
  //   $scope.reverse = false;
  //   $scope.sortCustomers = function(propName) {
  //     $scope.sortBy = propName;
  //     $scope.reverse = !$scope.reverse;
  //   };
  // }];
}()); // Self-invoked anonymous function; prevents polluting global namespace
