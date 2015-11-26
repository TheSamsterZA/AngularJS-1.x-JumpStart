/// Depends on: app.js
(function() {
  var controllers = angular.module('app').controllers;

  controllers.valuesController = function($scope, appSettings) {
    $scope.title = appSettings.title;
    $scope.version = appSettings.version;
  };
  controllers.valuesController.$inject = ['$scope', 'appSettings'] // Syntax to deal with minification issue

  angular.module('app') // Reference module
    .controller(controllers);

}()); // Self-invoked anonymous function; prevents polluting global namespace
