var app = angular.module('directivePractice')

app.directive('dirDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/dirDisplay.html',
		scope: {
			setUser: '&',
			currentUser: '='
		},
		link: function(scope, elem, attrs){
			elem.on('click', function(){
				scope.setUser({user: scope.currentUser}),
				scope.$apply();
			})
		}
	}
	
})

app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		controller: function($scope){
			//$scope.weatherCall({city: $scope.currentUser.city}).then(function(response){
				//$scope.weather = response.weather;
				//$scope.temp = response.temp;
			//})
			$scope.$watch('currentUser', function(){
				$scope.weatherCall({city: $scope.currentUser.city}).then(function(response){
					$scope.weather = response.weather;
					$scope.temp = response.temp;
				})
			})
		}
	}
	

})