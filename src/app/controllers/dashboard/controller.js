angular
	.module('fk.dashboard.controller', ['fk.util.service', 'fk.util.service', 'fk.cart.factory', 'fk.util.directive'])
	.controller(
				'DashBoardController',
				function($scope, ItemService, CommonService, CartFactory) {

					ItemService.fruits().then(function successCallback(response) {
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

					$scope.addToCart = function(fruit){
						
						CartFactory.addToCart(fruit);
						updateCartInfo();
					};

					function updateCartInfo(){
						$scope.totalCount = CartFactory.count();
						$scope.totalCost = CartFactory.cost();
					}

					$scope.searchItems = function(value){
						ItemService.fruits().then(function successCallback(response) {
							$scope.fruits = [];
							var fruits = response.data;
							for(var index in fruits){
								var pattern = new RegExp(value, "i");
								if(pattern.test(fruits[index].name)){
									$scope.fruits.push(fruits[index]);
								}
							}
							updateCartInfo();
					  	}, function errorCallback(response) {
					  		console.log(reponse);
					  	});
					};
					
				});
