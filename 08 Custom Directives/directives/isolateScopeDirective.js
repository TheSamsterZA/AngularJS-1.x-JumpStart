/// Depends on: app.js
(function() {
  var directives = angular.module('app').directives;

  directives.isolateScope = function() { // NOTE: no $scope injection
    return { // Directive Definition Object
      restrict: 'E', // Restrict directive type to element only
      scope: { // Isolate scope
        title: '@', // One-way binding to strings only
        version: '=', // Two-way binding to strings and objects
        action: '&' // Event delegate function
      },
      // Here, we are using the three different scope bindings in the template
      // title one-way binds to $scope.title:
      // - if $scope.title vhanges, then title changes
      // - if title changes, then ONLY title changes. $scope.title is untouched
      // version two-way binds to $scope.version:
      // - if $scope.version changes, then version changes, AND VICE VERSA
      // action is a delegate to the $scope.changeTitle() function:
      // - fires the function, which changes $scope.title
      template: ' \
        [isolate-scope]: \
        directiveScope.title: {{ title }} \
        directiveScope.version: {{ version }} \
        <button ng-click="version = version + 1; title = \'Directive Changed Title\'">Click Me</button> \
        <button ng-click="action();">Run $scope.changeTitle() Function</button> \
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
