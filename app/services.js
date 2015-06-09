var app = angular.module('directivePractice');

app.service('homeService', function($http, $q){

	this.getWeather = function(city){
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
		}).then(function(response){
			var data =  {
				weather: response.data.weather[0].description,
				temp: Math.round((response.data.main.temp - 273.15) * 1.8 + 32)
			}
			dfd.resolve(data);
		})
		return dfd.promise;
	}
})