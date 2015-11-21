'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search2Ctrl'
  });
}])

.controller('Search2Ctrl', ['$scope', '$filter', function($scope, $filter) {

  $scope.activities = "xyz";

  /* $scope.runsearch = function(){
    console.log("Connected")
  }; */

}]);
