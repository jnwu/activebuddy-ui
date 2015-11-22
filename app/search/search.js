'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search2Ctrl'
  });
}])

.controller('Search2Ctrl', ['$scope', '$filter', '$http', '$q', function($scope, $filter, $http, $q) {


getActivities();

function getActivities() {

  return $http.get('http://activebuddy-db-staging.herokuapp.com/activity'
  ).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.activities = data;
      console.log(data);

    }, function errorCallback(response) {

        console.log("Nothing was returned.")// called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    /* $scope.runsearch = function(){
      console.log("Connected")
    }; */

  };
}]);
