var app = angular.module('directivePractice')

app.directive('dirDisplay', function(){
	return {
		restrict: 'E',
		templateUrl: 'app/dirDisplay.html',
		scope: {
			setUser: '&',
			user: '=',
			currentUser: '='
		},
		link: function(scope, elem, attrs){
			elem.on('click', function(){
				console.log(scope, elem, attrs);
				scope.show = !scope.show;
				if(scope.show === true){
					scope.toggler = false;
					scope.setUser({user: scope.user})
				};
				scope.$apply();
			})
		},
		controller: function($scope){
			$scope.$watch('currentUser', function(){
				if($scope.currentUser !== $scope.user){
					$scope.show = false;
					$scope.toggler = true;
				}
			})
		}
	}
	
})

app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&',
		},
		controller: function($scope){
			$scope.loading = false;
			$scope.$watch('currentUser', function(){
				$scope.loading = true;
				$scope.loaded = false;
				$scope.weatherCall({city: $scope.currentUser.city}).then(function(response){
					$scope.weather = response.weather;
					$scope.temp = response.temp;
					$scope.loading = false;
					$scope.loaded = true;
				})
			})
		}
	}
	

})