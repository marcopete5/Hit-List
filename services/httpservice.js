angular.module('HitList')

.service('httpService', ['$http', function ($http){

		this.getHitList = function(){
			return $http.get('http://api.vschool.io:6543/hitlist.json')
				.then(function(response){
					return response.data;
			});
		}

}]);