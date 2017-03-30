angular
	.module('fk.item.service', [])
	.service('ItemService', function($http){

		this.fruits = function() {
			return $http.get("app/data/fruits.json");
		};

		this.fruit = function(id) {
			return $http.get("app/data/fruits.json");
		};

		this.searchItems = function(value){
			return $http.get("app/data/fruits.json");
		};
	});