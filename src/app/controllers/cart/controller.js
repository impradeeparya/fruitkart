angular
	.module('fk.cart.controller', ['fk.cart.factory', 'fk.util.service'])
	.controller(
				'CartController',
				function($scope, $routeParams, CartFactory, ItemService, CommonService) {


					CommonService.staticData().then(function successCallback(response) {
							
							var data = response.data;
							$scope.title = data.title;
							$scope.welcomeMessage = data['welcome.message'];
							$scope.welcomeNote = data['welcome.note'];

					  	}, function errorCallback(response) {
					  		console.log(response);
					  	});

					
					function updateCartInfo(){
						$scope.totalCount = CartFactory.count();
						$scope.totalCost = CartFactory.cost();
					}

					$scope.addToCart = function(){
						CartFactory.addToCart($scope.fruit);
						updateCartInfo();
					};

					$scope.removeFromCart = function(){
						CartFactory.removeFromCart($scope.fruit.id);
						updateCartInfo();	
					};

					$scope.redirectToStore = function(){
						CommonService.redirectToStore();
					};
				
				});
