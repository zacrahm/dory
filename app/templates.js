angular.module("dory").run(["$templateCache", function($templateCache) {$templateCache.put("components/nav/nav.html","<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\r\n      <header class=\"demo-header mdl-layout__header mdl-color--white mdl-color--grey-100 mdl-color-text--grey-600\">\r\n        <div class=\"mdl-layout__header-row\">\r\n          <span class=\"mdl-layout-title\">Home</span>\r\n          <div class=\"mdl-layout-spacer\"></div>\r\n          <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\r\n            <label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\r\n              <i class=\"material-icons\">search</i>\r\n            </label>\r\n            <div class=\"mdl-textfield__expandable-holder\">\r\n              <input class=\"mdl-textfield__input\" type=\"text\" id=\"search\" />\r\n              <label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\r\n            </div>\r\n          </div>\r\n          <button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\r\n            <i class=\"material-icons\">more_vert</i>\r\n          </button>\r\n          <ul class=\"mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right\" for=\"hdrbtn\">\r\n            <li class=\"mdl-menu__item\">About</li>\r\n            <li class=\"mdl-menu__item\">Contact</li>\r\n            <li class=\"mdl-menu__item\">Legal information</li>\r\n          </ul>\r\n        </div>\r\n      </header>\r\n      <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\r\n        <header class=\"demo-drawer-header\">\r\n          <img src=\"images/user.jpg\" class=\"demo-avatar\">\r\n          <div class=\"demo-avatar-dropdown\">\r\n            <span>hello@example.com</span>\r\n            <div class=\"mdl-layout-spacer\"></div>\r\n            <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\r\n              <i class=\"material-icons\">arrow_drop_down</i>\r\n            </button>\r\n            <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\r\n              <li class=\"mdl-menu__item\">hello@example.com</li>\r\n              <li class=\"mdl-menu__item\">info@example.com</li>\r\n              <li class=\"mdl-menu__item\"><i class=\"material-icons\">add</i>Add another account...</li>\r\n            </ul>\r\n          </div>\r\n        </header>\r\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">home</i>Home</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">inbox</i>Inbox</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">delete</i>Trash</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">report</i>Spam</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">forum</i>Forums</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">flag</i>Updates</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">local_offer</i>Promos</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">shopping_cart</i>Purchases</a>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">people</i>Social</a>\r\n          <div class=\"mdl-layout-spacer\"></div>\r\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\">help_outline</i></a>\r\n        </nav>\r\n      </div>\r\n      <main class=\"mdl-layout__content mdl-color--grey-100\">\r\n        <div class=\"mdl-grid demo-content\">\r\n          <div class=\"demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid\">\r\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\r\n              <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\r\n              <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82<tspan font-size=\"0.2\" dy=\"-0.07\">%</tspan></text>\r\n            </svg>\r\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\r\n              <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\r\n              <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.15\">82<tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan></text>\r\n            </svg>\r\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\r\n              <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\r\n              <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82<tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan></text>\r\n            </svg>\r\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\r\n              <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\r\n              <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82<tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan></text>\r\n            </svg>\r\n          </div>\r\n          <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\r\n            <svg fill=\"currentColor\" viewBox=\"0 0 500 250\" class=\"demo-graph\">\r\n              <use xlink:href=\"#chart\"/>\r\n            </svg>\r\n            <svg fill=\"currentColor\" viewBox=\"0 0 500 250\" class=\"demo-graph\">\r\n              <use xlink:href=\"#chart\"/>\r\n            </svg>\r\n          </div>\r\n          <div class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\r\n            <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\r\n              <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\r\n                <h2 class=\"mdl-card__title-text\">Updates</h2>\r\n              </div>\r\n              <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\r\n                Non dolore elit adipisicing ea reprehenderit consectetur culpa.\r\n              </div>\r\n              <div class=\"mdl-card__actions mdl-card--border\">\r\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Read More</a>\r\n              </div>\r\n            </div>\r\n            <div class=\"demo-separator mdl-cell--1-col\"></div>\r\n            <div class=\"demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop\">\r\n              <div class=\"mdl-card__supporting-text mdl-color-text--blue-grey-50\">\r\n                <h3>View options</h3>\r\n                <ul>\r\n                  <li>\r\n                    <label for=\"chkbox1\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\r\n                      <input type=\"checkbox\" id=\"chkbox1\" class=\"mdl-checkbox__input\" />\r\n                      <span class=\"mdl-checkbox__label\">Click per object</span>\r\n                    </label>\r\n                  </li>\r\n                  <li>\r\n                    <label for=\"chkbox2\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\r\n                      <input type=\"checkbox\" id=\"chkbox2\" class=\"mdl-checkbox__input\" />\r\n                      <span class=\"mdl-checkbox__label\">Views per object</span>\r\n                    </label>\r\n                  </li>\r\n                  <li>\r\n                    <label for=\"chkbox3\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\r\n                      <input type=\"checkbox\" id=\"chkbox3\" class=\"mdl-checkbox__input\" />\r\n                      <span class=\"mdl-checkbox__label\">Objects selected</span>\r\n                    </label>\r\n                  </li>\r\n                  <li>\r\n                    <label for=\"chkbox4\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\r\n                      <input type=\"checkbox\" id=\"chkbox4\" class=\"mdl-checkbox__input\" />\r\n                      <span class=\"mdl-checkbox__label\">Objects viewed</span>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"mdl-card__actions mdl-card--border\">\r\n                <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50\">Change location</a>\r\n                <div class=\"mdl-layout-spacer\"></div>\r\n                <i class=\"material-icons\">location_on</i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </main>\r\n    </div>\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" style=\"position: fixed; left: -1000px; height: -1000px;\">\r\n        <defs>\r\n          <mask id=\"piemask\" maskContentUnits=\"objectBoundingBox\">\r\n            <circle cx=0.5 cy=0.5 r=0.49 fill=\"white\" />\r\n            <circle cx=0.5 cy=0.5 r=0.40 fill=\"black\" />\r\n          </mask>\r\n          <g id=\"piechart\">\r\n            <circle cx=0.5 cy=0.5 r=0.5 />\r\n            <path d=\"M 0.5 0.5 0.5 0 A 0.5 0.5 0 0 1 0.95 0.28 z\" stroke=\"none\" fill=\"rgba(255, 255, 255, 0.75)\" />\r\n          </g>\r\n        </defs>\r\n      </svg>\r\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 500 250\" style=\"position: fixed; left: -1000px; height: -1000px;\">\r\n        <defs>\r\n          <g id=\"chart\">\r\n            <g id=\"Gridlines\">\r\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"27.3\" x2=\"468.3\" y2=\"27.3\"/>\r\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"66.7\" x2=\"468.3\" y2=\"66.7\"/>\r\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"105.3\" x2=\"468.3\" y2=\"105.3\"/>\r\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"144.7\" x2=\"468.3\" y2=\"144.7\"/>\r\n              <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"184.3\" x2=\"468.3\" y2=\"184.3\"/>\r\n            </g>\r\n            <g id=\"Numbers\">\r\n              <text transform=\"matrix(1 0 0 1 485 29.3333)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">500</text>\r\n              <text transform=\"matrix(1 0 0 1 485 69)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">400</text>\r\n              <text transform=\"matrix(1 0 0 1 485 109.3333)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">300</text>\r\n              <text transform=\"matrix(1 0 0 1 485 149)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">200</text>\r\n              <text transform=\"matrix(1 0 0 1 485 188.3333)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">100</text>\r\n              <text transform=\"matrix(1 0 0 1 0 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">1</text>\r\n              <text transform=\"matrix(1 0 0 1 78 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">2</text>\r\n              <text transform=\"matrix(1 0 0 1 154.6667 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">3</text>\r\n              <text transform=\"matrix(1 0 0 1 232.1667 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">4</text>\r\n              <text transform=\"matrix(1 0 0 1 309 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">5</text>\r\n              <text transform=\"matrix(1 0 0 1 386.6667 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">6</text>\r\n              <text transform=\"matrix(1 0 0 1 464.3333 249.0003)\" fill=\"#888888\" font-family=\"\'Roboto\'\" font-size=\"9\">7</text>\r\n            </g>\r\n            <g id=\"Layer_5\">\r\n              <polygon opacity=\"0.36\" stroke-miterlimit=\"10\" points=\"0,223.3 48,138.5 154.7,169 211,88.5\r\n              294.5,80.5 380,165.2 437,75.5 469.5,223.3 	\"/>\r\n            </g>\r\n            <g id=\"Layer_4\">\r\n              <polygon stroke-miterlimit=\"10\" points=\"469.3,222.7 1,222.7 48.7,166.7 155.7,188.3 212,132.7\r\n              296.7,128 380.7,184.3 436.7,125 	\"/>\r\n            </g>\r\n          </g>\r\n        </defs>\r\n      </svg>");}]);