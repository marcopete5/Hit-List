var app = angular.module('HitList', []);

app.controller('MainController', ['$scope', '$http', 'httpService', function ($scope, $http, httpService){
		
		// $http.get('http://api.vschool.io:6543/hitlist.json')
		// 	.then(function (response) {
		// 		$scope.theList = response.data;

		// });
		
		httpService.getHitList().then(function(response){
			$scope.theList = response;
		})

}]);