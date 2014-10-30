'use strict';

var AngularSeedSpm = angular.module('ASS', ['ngRoute', 'ASS.home', 'ASS.intro','ASS.about', 'ASS.version']);

AngularSeedSpm.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
    $locationProvider.html5Mode(false);
}]);


var home = require("./home/home");
var about = require("./about/about");
var intro = require("./intro/intro");
var version = require("./components/ver/version");

angular.bootstrap(document, ['ASS']);