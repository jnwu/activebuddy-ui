'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search2Ctrl'
  });
}])

.controller('Search2Ctrl', ['$scope', '$filter', function($scope, $filter) {

  $scope.activities = [
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



  /* $scope.runsearch = function(){
    console.log("Connected")
  }; */

}]);
