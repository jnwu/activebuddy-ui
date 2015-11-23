'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'Search2Ctrl'
  });
}])

.controller('Search2Ctrl', ['$scope', '$filter', '$http', '$q', function($scope, $filter, $http, $q) {
angular.element('#infocontent').css('display', 'none');
angular.element('#infocontent2').css('display', 'none');
angular.element('#infocontent3').css('display', 'none');
angular.element('#infocontent4').css('display', 'none');
 $.fn.fullpage.destroy('all');
$scope.add = function(){
  this.activity.ofUserEmails.push(localStorage.email);
};

getActivities();

function getActivities() {

  return $http.get('http://activebuddy-db-production.herokuapp.com/activity'
  ).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.activities = data;
      console.log(data[0]);

    }, function errorCallback(response) {

        console.log("Nothing was returned.")// called asynchronously if an error occurs
      // or server returns response with an error status.
    });
    /* $scope.runsearch = function(){
      console.log("Connected")
    }; */

  };

}]);
