'use strict';

var appVer = angular.module('ASS.appVer', [
  'ASS.appVer.interpolate-filter',
  'ASS.appVer.version-directive'
]);

appVer.value('version', '0.1');

var interpolateFilter = require("./interpolate-filter");
var versionDirective =  require("./version-directive");

module.exports = appVer;