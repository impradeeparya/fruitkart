angular
	.module('fk.dashboard.service', [])
	.service('DashboardService', function($http){

		this.fruits = function() {
			return $http.get("app/data/fruits.json");
		};
	});