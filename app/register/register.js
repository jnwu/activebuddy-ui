'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	$scope.user = {email: '', password: null};
	$scope.userprofile = {activity: '', skill: ''};
	$scope.activity=[
	  { id: 1, "text": "Hiking" },
	  { id: 2, "text": "Rock Climbing" },
	  { id: 3, "text": "Skiing" }
	];
	$scope.skills=[
	  { id: 1 },
	  { id: 2 },
	  { id: 3 }
	];
	$scope.selActivity=$scope.activity[0].subItem;
	$scope.selSkills=$scope.skills[0].subItem;

	$scope.showprofile=false;
	$scope.hideregister=false;

	$scope.validate=function(){

		$scope.hideregister=true;
		$scope.showprofile=true;
		$scope.debug("Registering");
		console.log($scope.user.email);
		console.log($scope.user.password);
		$scope.registerUser();
	};
	$scope.login=function(){
		$scope.hideregister=true;
		$location.path( "/search" );
	};

	$scope.registerUser=function(){
		//create request variable for post
		var req = {
		 method: 'POST',
		 url: 'https://activebuddy-db-staging.herokuapp.com/user',
		 headers: {
		   'Content-Type': 'application/json'
		 },
		 data: $scope.user
		};

		//actual request
		$http(req).then(function successCallback(response) {
		    console.log(response);
		    /*if(response){

		    }else{

		    }
		    */

		 }, function errorCallback(response) {
		    

		 });
		
		
	};

	$scope.loginUser=function(query){
		//create request variable for post
		var req = {
		 method: 'POST',
		 url: 'https://someurl/user/',
		 headers: {
		   'Content-Type': application/json
		 },
		 data: $scope.user
		};

		//actual request
		$http(req).then(function successCallback(response) {
		    if(response){

		    }else{

		    }

		 }, function errorCallback(response) {
		    

		 });
		
		
	};

	$scope.addActivity=function(query){

	}
	

	$scope.debug=function(msg){
		var debugon=true;
		if(debugon)console.log(msg);
	};

}]);