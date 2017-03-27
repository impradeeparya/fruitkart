angular
	.module('fk.util.service', [])
	.service('CommonService', function($http){

		this.staticData = function(){
			return $http.get("app/data/static.json");
		};
	});