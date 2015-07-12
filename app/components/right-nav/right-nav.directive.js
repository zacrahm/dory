(function() {
	angular.module('dory.right.nav')
	.directive('rightNav', rightNav);

	function rightNav() {
		return {
			restrict: 'EA',
			templateUrl: 'components/right-nav/right-nav.html'
		}
	}
})();