angular
	.module('fk.cart.controller', ['fk.cart.factory', 'fk.util.service'])
	.controller(
				'CartController',
				function($scope, $routeParams, CartFactory, CommonService) {


					CommonService.staticData().then(function successCallback(response) {
							
							var data = response.data;
							$scope.title = data.title;
							$scope.thanksMessage = data['thanks.message'];
							$scope.cartMessage = data['cart.message'];

					  	}, function errorCallback(response) {
					  		console.log(response);
					  	});

					$scope.cart = CartFactory.cart();
					updateCartInfo();

					
					function updateCartInfo(){
						$scope.totalCount = CartFactory.count();
						$scope.totalCost = CartFactory.cost();
					}

					$scope.addToCart = function(){
						CartFactory.addToCart($scope.fruit);
						updateCartInfo();
					};

					$scope.clearCart = function(){
						$scope.cart = CartFactory.clearCart();
						updateCartInfo();	
					};

					$scope.redirectToStore = function(){
						CommonService.redirectToStore();
					};

					$scope.removeFromCart = function(item){
						$scope.cart = CartFactory.removeFromCart(item.id);
						updateCartInfo();	
					};

					$scope.updateQuantity = function(item, quantity){
						quantity = item.quantity + quantity;

						if(quantity == 0){
							$scope.cart = CartFactory.removeFromCart(item.item.id);
						}else{
							item.quantity = quantity;
							$scope.cart = CartFactory.update(item.item.id, item);	
						}
						
						updateCartInfo();
					}
				});
