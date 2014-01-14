'use strict';

angular.module('catticsApp')
  .controller('ExploreCtrl', function ($scope, $location, Restangular) {
    var path = $location.path();
    var lastUrlComp = path.substring(path.lastIndexOf('/')+1);

    // Pagination
    var page = parseInt($location.search().page) || 1;
    $scope.paginationPages = [1, 2, 3, 4, 5, 6];

    $scope.isPreviousDisabled = function() {
      return page === 1;
    };

    $scope.isNextDisabled = function() {
      return page === $scope.paginationPages[$scope.paginationPages.length-1];
    };

    $scope.isPageActive = function(checkPage) {
      return checkPage === page;
    };

    $scope.goPrevPage = function() {
      if (!$scope.isPreviousDisabled()) {
        $location.search('page', page-1);
      }
    };

    $scope.goNextPage = function() {
      if (!$scope.isNextDisabled()) {
        $location.search('page', page+1);
      }
    };

    $scope.goPage = function(pg) {
      $location.search('page', pg);
    };

    // API
    Restangular.one('explore').getList(lastUrlComp, {page: page}).then(function(res) {
      var columnsNo = 4;
      var rowsNo = 5;
      var photosPerPage = rowsNo * columnsNo;

      $scope.pages = [];

      for (var pi = 0; pi < Math.ceil(res.length / photosPerPage); pi++) {
        var rows = [];

        for (var ri = 0; ri < rowsNo; ri++) {
          var offset = pi * photosPerPage + ri * columnsNo;
          var columns = res.slice(offset, offset + columnsNo);

          rows.push(columns);
        }

        $scope.pages.push(rows);
      }
    });
  });
