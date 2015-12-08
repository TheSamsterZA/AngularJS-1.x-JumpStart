/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.valuesController = function($scope, appSettings) {
    $scope.title = appSettings.title;
    $scope.version = appSettings.version;

    $scope.changeTitle = function() {
      $scope.title = 'Controller Changed Title';
    }
  };
  controllers.valuesController.$inject = ['$scope', 'appSettings'] // Syntax to deal with minification issue
}()); // Self-invoked anonymous function; prevents polluting global namespace
