'use strict';

angular.module('catticsApp')
  .controller('OwnerProfileCtrl', function ($scope, $routeParams, Restangular) {
    // Load data
    Restangular.all('owner').one($routeParams.ownerId).get().then(function(owner) {
      $scope.owner = owner[0];
      console.log(owner);
    });
  });
