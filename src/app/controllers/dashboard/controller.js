angular
	.module('fk.dashboard.controller', ['fk.dashboard.service'])
	.controller(
				'DashBoardController',
				function($scope, DashboardService) {
					$scope.title = "Fruit Store";

					DashboardService.fruits().then(function successCallback(response) {
						$scope.fruits = response.data;
					  }, function errorCallback(response) {
					  	console.log(reponse);
					  });
					
				});
