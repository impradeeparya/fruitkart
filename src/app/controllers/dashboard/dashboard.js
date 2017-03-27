angular
	.module('fk.dashboard', ['fk.dashboard.controller', 'fk.util.service', 'fk.cart.service'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/', {
            				controller: 'DashBoardController',
            				templateUrl: 'app/views/dashboard/dashboard.html'
        				});
	}]);