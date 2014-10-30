'use strict';

var version = angular.module('ASS.version', [
  'ASS.version.interpolate-filter',
  'ASS.version.version-directive'
]);

version.value('version', '0.1');

var interpolateFilter = require("./interpolate-filter");
var versionDirective =  require("./version-directive");

module.exports = version;