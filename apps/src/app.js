'use strict';

var AngularSeedSpm = angular.module('ASS', ['ngRoute', 'ASS.homeControllers', 'ASS.aboutControllers', 'ASS.appVer']);

AngularSeedSpm.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(false);
}]);


var homeControllers = require("./home/homeControllers");
var aboutControllers = require("./about/aboutControllers");
var appVer = require("./components/ver/appVer");

angular.bootstrap(document, ['ASS']);