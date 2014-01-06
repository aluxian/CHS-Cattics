'use strict';

angular.module('catticsApp')
  .directive('scrollTo', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var doc = angular.element(document);
        var body = doc.find('body');
        var offset = doc.find(attrs.scrollTo).offset().top;

        element.on('click', function() {
          body.animate({ scrollTop: offset }, 600);
        });
      }
    };
  });
