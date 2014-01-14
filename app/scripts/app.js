'use strict';

angular.module('catticsApp', [
  'ngCookies',
  'ngSanitize',
  'ngRoute',
  'restangular'
])
  // Set routes
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main'
      })
      .when('/explore/:what', {
        templateUrl: 'partials/explore',
        controller: 'ExploreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })

  // Restangular config
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  });
