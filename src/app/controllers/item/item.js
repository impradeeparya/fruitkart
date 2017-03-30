angular
	.module('fk.item', ['fk.item.controller', 'fk.item.service', 'fk.cart.factory'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/item/:id', {
            				controller: 'ItemController',
            				templateUrl: 'app/views/item/item.html'
        				});
	}]);