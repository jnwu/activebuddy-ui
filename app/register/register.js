'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope', function($scope) {
	$scope.user = {email: '', first: '', last: '', interests: '', password: ''};
	$scope.showprofile=false;
	$scope.validate=function(){
		$scope.showprofile=true;
	};

}]);