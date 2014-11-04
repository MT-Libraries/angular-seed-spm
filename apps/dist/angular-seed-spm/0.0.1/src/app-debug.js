define("angular-seed-spm/0.0.1/src/app-debug", [], function(require, exports, module) {
  'use strict';
  var AngularSeedSpm = angular.module('ASS', ['ui.router', 'ASS.home', 'ASS.intro', 'ASS.about', 'ASS.version', 'ASS.service']);
  AngularSeedSpm.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }]);
  var home = require("angular-seed-spm/0.0.1/src/home/home-debug");
  var about = require("angular-seed-spm/0.0.1/src/about/about-debug");
  var intro = require("angular-seed-spm/0.0.1/src/intro/intro-debug");
  var version = require("angular-seed-spm/0.0.1/src/components/ver/version-debug");
  var service = require("angular-seed-spm/0.0.1/src/components/service/service-debug");
  angular.bootstrap(document, ['ASS']);
});
define("angular-seed-spm/0.0.1/src/home/home-debug", [], function(require, exports, module) {
  'use strict';
  /********************************************************
   * STATIC
   ********************************************************/
  var logger = require("angular-seed-spm/0.0.1/src/components/util/logger-debug");
  var home = angular.module('ASS.home', ['ui.router']);
  /********************************************************
   * CONTROLLER
   ********************************************************/
  home.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: 'apps/src/home/layout.html',
          controller: 'HomeCtrl'
        },
        'head@home': {
          templateUrl: "apps/src/home/head.html"
        },
        'main@home': {
          templateUrl: 'apps/src/home/main.html',
          controller: 'MainCtrl'
        }
      }
    })
  }]);
  home.controller('HomeCtrl', [function() {
    logger.log('this is logger test');
  }]);
  home.controller('MainCtrl', ['$scope', 'shareService', function($scope, shareService) {
    shareService.asy().then(function(response) {
      console.log(response);
    });
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
  var about = angular.module('ASS.about', ['ui.router']);
  about.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('about', {
      url: '/about',
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
  var intro = angular.module('ASS.intro', ['ui.router']);
  intro.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('intro', {
      url: '/intro',
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
define("angular-seed-spm/0.0.1/src/components/service/service-debug", [], function(require, exports, module) {
  /**
   * Created by thonatos on 14-10-31.
   */
  var service = angular.module('ASS.service', ['ASS.service.shareService']);
  var share = require("angular-seed-spm/0.0.1/src/components/service/shareService-debug");
  module.exports = service;
});
define("angular-seed-spm/0.0.1/src/components/service/shareService-debug", [], function(require, exports, module) {
  /**
   * Created by thonatos on 14-10-31.
   */
  var shareService = angular.module('ASS.service.shareService', []).factory('shareService', ['$http', function($http) {
    var _data = {};
    return ({
      add: _add,
      get: _get,
      asy: _async
    });
    // Public Method
    function _add(parmas) {
      _data = parmas;
    }

    function _get() {
      return _data;
    }

    function _async() {
      var promise = $http.get('data/test.json').then(function(response) {
        // The then function here is an opportunity to modify the response
        //console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.data;
      });
      // Return the promise to the controller
      return promise;
    }
  }]);
  module.exports = shareService;
});