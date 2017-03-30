angular
	.module('fk.util.directive', [])
	.directive('circleRating', function(){

		return {
	      restrict: 'EA',
	      template:
	        '<ul class="circle-rating">' +
	        '  <li ng-repeat="circle in circles" class="circle" ng-class="{filled: circle.filled}">' +
	        '    <i class="fa fa-circle"></i>' +
	        '  </li>' +
	        '</ul>',
	      scope: {
	        ratingValue: '=ngModel',
	        max: '=?'
	      },
	      link: function(scope, element, attributes) {
			if (scope.max === undefined) {
				scope.max = 5;
			}

			scope.circles = [];
			for (var i = 0; i < scope.max; i++) {
				scope.circles.push({
				  filled: i < scope.ratingValue
				});
			}
	      }
	    };
	})
	.directive('search', function () {
		return function ($scope, element) {
			element.bind("keyup", function (event) {
				var val = element.val();
				$scope.searchItems(val);
			});
	    };
	});