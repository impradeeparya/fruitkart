angular
	.module('fk.cart', ['fk.cart.controller', 'fk.cart.factory'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/cart', {
            				controller: 'CartController',
            				templateUrl: 'app/views/cart/cart.html'
        				});
	}]);