angular
	.module('fk.product.controller', ['fk.product.service', 'fk.cart.factory', 'fk.util.service', 'fk.util.directive'])
	.controller(
				'ProductController',
				function($scope, $routeParams, CartFactory, ProductService, CommonService) {

					ProductService.fruit($routeParams.id).then(function successCallback(response) {

							for(var index in response.data){
								if(response.data[index].id === $routeParams.id){
									$scope.fruit = response.data[index];
									updateCartInfo();
								}
							}
							
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
