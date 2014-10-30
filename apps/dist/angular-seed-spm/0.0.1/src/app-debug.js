define("angular-seed-spm/0.0.1/src/app-debug", [], function(require, exports, module) {
  'use strict';
  var AngularSeedSpm = angular.module('ASS', ['ngRoute', 'ASS.home', 'ASS.intro', 'ASS.about', 'ASS.version']);
  AngularSeedSpm.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
    $locationProvider.html5Mode(false);
  }]);
  var home = require("angular-seed-spm/0.0.1/src/home/home-debug");
  var about = require("angular-seed-spm/0.0.1/src/about/about-debug");
  var intro = require("angular-seed-spm/0.0.1/src/intro/intro-debug");
  var version = require("angular-seed-spm/0.0.1/src/components/ver/version-debug");
  angular.bootstrap(document, ['ASS']);
});
define("angular-seed-spm/0.0.1/src/home/home-debug", [], function(require, exports, module) {
  'use strict';
  /********************************************************
   * STATIC
   ********************************************************/
  var logger = require("angular-seed-spm/0.0.1/src/components/util/logger-debug");
  var home = angular.module('ASS.home', ['ngRoute']);
  /********************************************************
   * CONTROLLER
   ********************************************************/
  home.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'apps/src/home/main.html',
      controller: 'MainCtrl'
    });
  }]);
  home.controller('MainCtrl', [function() {
    logger.log('this is logger test');
  }]);
  module.exports = home;
});
define("angular-seed-spm/0.0.1/src/components/util/logger-debug", [], function(require, exports, module) {
  /**
   * Created by thonatos on 14-10-30.
   */
  var conf = require("angular-seed-spm/0.0.1/src/components/conf/conf-debug");
  var logger = {
    log: function(str) {
      if (conf.debug()) {
        console.log(str); // just log message with debug-true
      }
    }
  };
  module.exports = logger;
});
define("angular-seed-spm/0.0.1/src/components/conf/conf-debug", [], function(require, exports, module) {
  /**
   * Created by thonatos on 14-10-30.
   */
  var _debug = false;
  var conf = {
    debug: function() {
      var _dev = {};
      if (_debug) {
        _dev = false;
      } else {
        _dev = true;
      }
      return _dev;
    }
  };
  module.exports = conf;
});
define("angular-seed-spm/0.0.1/src/about/about-debug", [], function(require, exports, module) {
  'use strict';
  var about = angular.module('ASS.about', ['ngRoute']);
  about.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'apps/src/about/main.html',
      controller: 'AboutCtrl'
    });
  }]);
  about.controller('AboutCtrl', [function() {}]);
  module.exports = about;
});
define("angular-seed-spm/0.0.1/src/intro/intro-debug", [], function(require, exports, module) {
  /**
   * Created by thonatos on 14-10-20.
   */
  var intro = angular.module('ASS.intro', ['ngRoute']);
  intro.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/intro', {
      templateUrl: 'apps/src/intro/main.html',
      controller: 'IntroCtrl'
    });
  }]);
  intro.controller('IntroCtrl', [function() {}]);
  module.exports = intro;
});
define("angular-seed-spm/0.0.1/src/components/ver/version-debug", [], function(require, exports, module) {
  'use strict';
  var version = angular.module('ASS.version', ['ASS.version.interpolate-filter', 'ASS.version.version-directive']);
  version.value('version', '0.1');
  var interpolateFilter = require("angular-seed-spm/0.0.1/src/components/ver/interpolate-filter-debug");
  var versionDirective = require("angular-seed-spm/0.0.1/src/components/ver/version-directive-debug");
  module.exports = version;
});
define("angular-seed-spm/0.0.1/src/components/ver/interpolate-filter-debug", [], function(require, exports, module) {
  'use strict';
  var interpolateFilter = angular.module('ASS.version.interpolate-filter', []).filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
  module.exports = interpolateFilter;
});
define("angular-seed-spm/0.0.1/src/components/ver/version-directive-debug", [], function(require, exports, module) {
  'use strict';
  var versionDirective = angular.module('ASS.version.version-directive', []).directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
  module.exports = versionDirective;
});