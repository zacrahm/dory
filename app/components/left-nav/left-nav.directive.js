(function() {
	angular.module('dory.left.nav')
	.directive('leftNav', leftNav);

	function leftNav() {
		return {
			restrict: 'EA',
			templateUrl: 'components/left-nav/left-nav.html'
		}
	}
})();