/// Depends on: app.js
(function() {
  var directives = angular.module('app').directives;

  directives.sharedScope = function() { // NOTE: no $scope injection
    return { // Directive Definition Object
      restrict: 'AE', // Restrict directive type to element or attribute (default)
      scope: false, // Shared scope (default)
      template: '$scope.version: {{ version }}'
    };
  };

  angular.module('app') // Reference module
    .directive(directives);

}()); // Self-invoked anonymous function; prevents polluting global namespace
