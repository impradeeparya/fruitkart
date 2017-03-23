angular
	.module('fk.dashboard', ['fk.dashboard.controller'])
	.config(['$routeProvider', function ($routeProvider) {
    	$routeProvider
    		.when('/', {
            				controller: 'DashBoardController',
            				templateUrl: 'views/dashboard/dashboard.html'
        				});
	}]);