angular
	.module('fk.product', ['fk.product.controller', 'fk.product.service', 'fk.cart.factory'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/product/:id', {
            				controller: 'ProductController',
            				templateUrl: 'app/views/product/product.html'
        				});
	}]);