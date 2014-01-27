'use strict';

angular.module('catticsApp', [
  'ngRoute',
  'restangular'
])
// Set routes
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main'
    })
    /*.when('/cat/:catId/photo/:photoId', {
      templateUrl: 'partials/cat-photo',
      controller: 'CatPhotoCtrl'
    })*/
    .when('/home', {
      templateUrl: 'partials/home_activity',
      controller: 'HomeActivityCtrl'
    })
    .when('/home/following', {
      templateUrl: 'partials/home_following',
      controller: 'HomeFollowingCtrl'
    })
    .when('/cat/:catId', {
      templateUrl: 'partials/cat-profile',
      controller: 'CatProfileCtrl'
    })
    .when('/owner/:ownerId', {
      templateUrl: 'partials/owner-profile',
      controller: 'OwnerProfileCtrl'
    })
    .when('/explore/:what', {
      templateUrl: 'partials/explore',
      controller: 'ExploreCtrl'
    })
    .when('/competitions', {
      templateUrl: 'partials/competitions',
      controller: 'CompetitionsCtrl'
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
