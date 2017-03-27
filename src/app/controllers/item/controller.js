angular
	.module('fk.item.controller', ['fk.item.service', 'fk.cart.service', 'fk.util.service'])
	.controller(
				'ProductController',
				function($scope, $routeParams, CartFactory, ItemService, CommonService) {

					ItemService.fruit($routeParams.id).then(function successCallback(response) {

							for(var index in response.data){
								if(response.data[index].id === $routeParams.id){
									$scope.fruit = response.data[index];
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

					$scope.totalCount = CartFactory.count();
					$scope.totalCost = CartFactory.cost();
				
				});
