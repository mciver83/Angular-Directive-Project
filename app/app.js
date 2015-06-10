var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'app/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.otherwise('/home')
});
