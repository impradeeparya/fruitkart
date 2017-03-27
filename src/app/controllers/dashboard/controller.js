angular
	.module('fk.dashboard.controller', ['fk.dashboard.service', 'fk.cart.service'])
	.controller(
				'DashBoardController',
				function($scope, DashboardService, CartFactory) {

					$scope.totalCount = 0;
					$scope.totalCost = 0;

					DashboardService.fruits().then(function successCallback(response) {
							$scope.fruits = response.data;
					  	}, function errorCallback(response) {
					  		console.log(reponse);
					  	});

					DashboardService.staticData().then(function successCallback(response) {
							
							var data = response.data;
							$scope.title = data.title;
							$scope.welcomeMessage = data['welcome.message'];
							$scope.welcomeNote = data['welcome.note'];

					  	}, function errorCallback(response) {
					  		console.log(response);
					  	});

					$scope.addToCart= function(fruit){
						
						CartFactory.addToCart(fruit);

						$scope.totalCount = CartFactory.count();
						$scope.totalCost = CartFactory.cost();
					};
					
				});
