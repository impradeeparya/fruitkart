angular
	.module('fk.item', ['fk.item.controller', 'fk.item.service', 'fk.cart.service'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/item/:id', {
            				controller: 'ProductController',
            				templateUrl: 'app/views/item/item.html'
        				});
	}]);