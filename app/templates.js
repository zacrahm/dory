angular.module("dory").run(["$templateCache", function($templateCache) {$templateCache.put("components/left-nav/left-nav.html","<div class=\"list-group\">\r\n  <button type=\"button\" class=\"list-group-item\">Cras justo odio</button>\r\n  <button type=\"button\" class=\"list-group-item\">Dapibus ac facilisis in</button>\r\n  <button type=\"button\" class=\"list-group-item\">Morbi leo risus</button>\r\n  <button type=\"button\" class=\"list-group-item\">Porta ac consectetur ac</button>\r\n  <button type=\"button\" class=\"list-group-item\">Vestibulum at eros</button>\r\n</div>");
$templateCache.put("components/top-nav/top-nav.html","<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n		<div class=\"container-fluid\">\r\n			<div class=\"row\">\r\n				<div class=\"text-center\"><a class=\"navbar-brand\" href=\"#\">Network Device Manager</a></div>\r\n			</div>\r\n			<!-- <div class=\"row\"> -->\r\n			\r\n		<ul class=\"nav navbar-nav navbar-left\">\r\n        <li><a href=\"#\"><i class=\"glyphicon glyphicon-chevron-left\"></i></a></li>\r\n      	<li><a href=\"#\"><i class=\"glyphicon glyphicon-chevron-right\"></i></a></li>\r\n    </ul>\r\n    <div class=\"navbar-form navbar-left\">\r\n				<input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n			</div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n		<li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">username<span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Preferences</a></li>\r\n            <li><a href=\"#\">Help</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Log Out Everywhere</a></li>\r\n          </ul>\r\n        </li>\r\n 	</ul>\r\n			\r\n	</div>\r\n   \r\n   \r\n</nav>");}]);