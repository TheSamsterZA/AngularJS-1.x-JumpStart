/// Depends on: app.js
(function() {
  var directives = angular.module('app').directives;

  directives.isolateScope = function() { // NOTE: no $scope injection
    return { // Directive Definition Object
      restrict: 'E', // Restrict directive type to element only
      scope: { // Isolate scope
        titleAt: '@', // One-way binding to strings only
        versionEq: '=', // Two-way binding to strings and objects
        actionAmp: '&' // Event delegate function
      },
      // Here, we are using the three different scope bindings in the template
      // titleAt one-way binds to $scope.title:
      // - if $scope.title vhanges, then titleAt changes
      // - if titleAt changes, then ONLY titleAt changes. $scope.title is untouched
      // versionEq two-way binds to $scope.Version:
      // - if $scope.version changes, then versionEq changes, AND VICE VERSA
      // actionAmp is a delegate to the $scope.changeTitle() function:
      // - fires the function, which changes $scope.title
      template: ' \
        [isolate-scope]: \
        directiveScope.titleAt: {{ titleAt }} \
        directiveScope.versionEq: {{ versionEq }} \
        <button ng-click="versionEq = versionEq + 1; titleAt = \'Directive Changed Title\'">Increment Version</button> \
        <button ng-click="actionAmp();">Run $scope.changeTitle() Function</button> \
      ',
      // Below, we use the link function to do DOM manipulation
      link: function(scope, element, attributes) {
        element.on('mouseenter', function() {
          element.css('background-color', 'yellow');
        });
        element.on('mouseleave', function() {
          element.css('background-color', 'white');
        });
      }
    };
  };
}()); // Self-invoked anonymous function; prevents polluting global namespace
