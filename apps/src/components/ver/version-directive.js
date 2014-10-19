'use strict';

var versionDirective = angular.module('ASS.appVer.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

module.exports = versionDirective;
