'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {
	//Sessions stuff
	//TO DO
	//Messaging
	$scope.alertmessage='';
	/*
	this variable is used to switch between login or registration.
	0-register
	1-login
	*/
	$scope.loginstatus=0;

	//Users stuff
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

  $scope.gender=[
    {id: 1, "text": "Female"},
    {id: 2, "text": "Male"},
    {id: 3, "text": "Other"}
  ];

	$scope.selActivity=$scope.activity[0].subItem;
	$scope.selSkills=$scope.skills[0].subItem;

	$scope.showprofile=false;
	$scope.hideregister=false;
	$scope.isalert=false;

	$scope.validate=function(){
		$scope.loginstatus=0;
		$scope.registerUser();
	};
	$scope.login=function(){
		$scope.loginstatus=1;
		$scope.registerUser();
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
		    console.log(response.data.status);

		    if(response.data.status=="SUCCESS"){
		    	console.log("Return true");
		    	$scope.hideregister=true;
				$scope.showprofile=true;

				//this is critical for switching between logging in or registering.
				if($scope.loginstatus==0){
					//register tasks
					$scope.alertUser("You have succesfully registered and are now logged in, please complete your profile.", "success");
					$scope.debug("Registering");
				}else{
					//login tasks
					$scope.alertUser("You have succesfully logged in.", "success");
					$scope.debug("Logging in...");
					//$location.path( "/search" );
				};


		    }else{
		    	return false;
		    }

		 }, function errorCallback(response) {
		    return false;

		 });

	};

	$scope.addActivity=function(query){

	};

	$scope.alertUser=function(msg, alerttype){
		console.log(msg);
		$scope.alertmessage=msg;

		$scope.isalert=true;
	};

	$scope.debug=function(msg){
		var debugon=true;
		if(debugon)console.log(msg);
	};

}]);
