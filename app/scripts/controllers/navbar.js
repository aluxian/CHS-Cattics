'use strict';

angular.module('catticsApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Leaderboard',
      'link': '/leaderboard'
    },
    {
      'title': 'Sign in',
      'link': '/signin'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
