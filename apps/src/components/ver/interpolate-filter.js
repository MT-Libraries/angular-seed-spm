'use strict';

var interpolateFilter = angular.module('ASS.appVer.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

module.exports = interpolateFilter;
