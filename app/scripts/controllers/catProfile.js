'use strict';

angular.module('catticsApp')
  .controller('CatProfileCtrl', function ($scope, $routeParams, Restangular) {
    Restangular.one('cat', $routeParams.cat).get().then(function(cat) {
      console.log(cat);
    });
  });
