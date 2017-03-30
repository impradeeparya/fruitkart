angular
	.module('fk.util.service', [])
	.service('CommonService', function($http, $location){

		this.staticData = function(){
			return $http.get("app/data/static.json");
		};

		this.redirectToStore = function(){
			$location.path("/");
		};
	});