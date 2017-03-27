angular
	.module('fk.dashboard.controller', ['fk.util.service', 'fk.util.service', 'fk.cart.service'])
	.controller(
				'DashBoardController',
				function($scope, ItemService, CommonService, CartFactory) {

					$scope.totalCount = 0;
					$scope.totalCost = 0;

					ItemService.fruits().then(function successCallback(response) {
							$scope.fruits = response.data;
					  	}, function errorCallback(response) {
					  		console.log(reponse);
					  	});

					CommonService.staticData().then(function successCallback(response) {
							
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
