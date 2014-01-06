'use strict';

angular.module('catticsApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
