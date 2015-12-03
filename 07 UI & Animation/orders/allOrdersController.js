/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.allOrdersController = function($scope, $log, ordersService) {
    $scope.orders = null;
    $scope.ordersTotal = 0.0;
    $scope.totalType;

    function init() {
      ordersService.getOrders() // AJAX call, returns promise
        .success(function(orders) {
          $scope.orders = orders;
          getOrdersTotal();
        })
        .error(function(data, status, headers, config) {
          $log.log('HTTP ' + status + ' ' + config.method + ' ' + config.url + '\r\nError: ' +  data.error);
        });
    }

    // Used to dynamically change the styling of $scope.ordersTotal via CSS
    function getOrdersTotal() {
      var total = 0;
      for (var i = 0; i < $scope.orders.length; i++) {
        total += $scope.orders[i].total;
      }
      $scope.ordersTotal = total;
      $scope.totalType = ($scope.ordersTotal > 10) ? 'success' : 'danger';
    }

    init();
  };
  controllers.allOrdersController.$inject = ['$scope', '$log', 'ordersService']; // Syntax to deal with minification issue

  angular.module('app') // Reference module
    .controller(controllers);

}()); // Self-invoked anonymous function; prevents polluting global namespace
