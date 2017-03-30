angular
	.module('fk.cart.factory', [])
	.factory('CartFactory', [ function($http){

		var items = {};

		return {
				cart : function() {
					return items;
				},
				addToCart : function(item){

						var value = items[item.id];

						if(value === undefined){
							value = {};
						}

						value.item = item;
						value.quantity = value.quantity === undefined ? 1 : value.quantity + 1;
						items[item.id] = value;
						return items;
				},
				removeFromCart : function(itemId){
					delete items[itemId];
					return items;
				},
				clearCart : function(){
					items = {};
					return items;
				},
				update : function(itemId, item){
					items[itemId] = item;
					return items;
				},
				count : function(){
					return Object.keys(items).length;
				},
				cost : function(){
					var cost = 0;
					for(var id in items){
						cost = cost + (items[id].quantity * items[id].item.price);
					}
					return cost;
				}
		};
	}]);