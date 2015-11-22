'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search2Ctrl'
  });
}])

.controller('Search2Ctrl', ['$scope', '$filter', '$http', '$q', function($scope, $filter, $http, $q) {

  $scope.activities2 = [
    {name:'John', age:25, gender:'boy', activity:'hiking'},
    {name:'Jessie', age:30, gender:'girl', activity:'hiking'},
    {name:'Johanna', age:28, gender:'girl', activity:'hiking'},
    {name:'Joy', age:15, gender:'girl', activity:'hiking'},
    {name:'Mary', age:28, gender:'girl', activity:'running'},
    {name:'Peter', age:95, gender:'boy', activity:'running'},
    {name:'Sebastian', age:50, gender:'boy', activity:'running'},
    {name:'Erika', age:27, gender:'girl', activity:'walking'},
    {name:'Patrick', age:40, gender:'boy', activity:'walking'},
    {name:'Samantha', age:60, gender:'girl', activity:'walking'}
  ];


getActivities();

function getActivities() {
  var def = $q.defer();

  var request = $http({
    method: 'GET',
    url: 'http://activebuddy-db-staging.herokuapp.com/activity'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.activities = response.promise;
      def.resolve(response);

      console.log($scope.activities);
    }, function errorCallback(response) {

      def.reject("Failed to get activities");
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

    return def.promise.$$state.value;
    /* $scope.runsearch = function(){
      console.log("Connected")
    }; */

  };
}]);
