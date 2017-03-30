angular
	.module('fk.dashboard.controller', ['fk.util.service', 'fk.util.service', 'fk.cart.factory'])
	.controller(
				'DashBoardController',
				function($scope, ProductService, CommonService, CartFactory) {

					ProductService.fruits().then(function successCallback(response) {
							$scope.fruits = response.data;
							updateCartInfo();
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
						updateCartInfo();
					};

					function updateCartInfo(){
						$scope.totalCount = CartFactory.count();
						$scope.totalCost = CartFactory.cost();
					}
					
				});
