'use strict';

angular.module('catticsApp')
  .directive('isActive', function ($location) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var path = $location.path();
        var route = element.find('a')[0].href.replace(location.origin, '');

        if (path.indexOf(route) === 0) {
          element = element[0];
          element.className += ' active';
        }
      }
    };
  });
