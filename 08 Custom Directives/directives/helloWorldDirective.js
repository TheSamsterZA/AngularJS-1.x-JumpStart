/// Depends on: app.js
(function() {
  var directives = angular.module('app').directives;

  directives.helloWorld = function() {
    return { // Directive Definition Object
      restrict: 'AE', // Restrict directive type to element or attribute (default)
      scope: false, // Shared scope (default)
      template: 'Hello World!'
    };
  };
}()); // Self-invoked anonymous function; prevents polluting global namespace
