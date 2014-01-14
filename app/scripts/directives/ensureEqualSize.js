'use strict';

angular.module('catticsApp')
  .directive('ensureEqualSize', function () {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element[0].style.height = element.width() + 'px';
      }
    };
  });
