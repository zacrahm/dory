(function() {
	angular.module('dory.top.nav')
	.directive('topNav', topNav);

	function topNav() {
		return {
			restrict: 'EA',
			templateUrl: 'components/top-nav/top-nav.html'
		}
	}
})();