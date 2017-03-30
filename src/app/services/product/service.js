angular
	.module('fk.product.service', [])
	.service('ProductService', function($http){

		this.fruits = function() {
			return $http.get("app/data/fruits.json");
		};

		this.fruit = function(id) {
			return $http.get("app/data/fruits.json");
		};
	});