'use strict';

angular.module('catticsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
