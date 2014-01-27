'use strict';

angular.module('catticsApp')
  .controller('CatProfileCtrl', function ($scope, $routeParams, Restangular) {
    // Load data
    Restangular.all('cat').one($routeParams.catId).get().then(function(cat) {
      $scope.cat = cat;
      console.log(cat);
    });
  });
