angular
	.module('fk.dashboard.controller', [])
	.controller(
				'DashBoardController',
				function($scope) {
					$scope.title = "Fruit Store";

					$scope.items = [
						{
							'name': 'Apple',
							'description' : 'Eat one every day to keep doctor away',
							'rate' : '120'
						},
						{
							'name': 'Grapes',
							'description' : 'Wine is great but grapes are even better',
							'rate' : '52'
						},
						{
							'name': 'Papaya',
							'description' : 'Super popular for breakfast',
							'rate' : '30'
						},
						{
							'name': 'Pineapple',
							'description' : 'Enjoy it but do not forget to peel first',
							'rate' : '60'
						}
					];
				});
