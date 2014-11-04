'use strict';

var AngularSeedSpm = angular.module('ASS', [
    'ui.router',
    'ASS.home',
    'ASS.intro',
    'ASS.about',
    'ASS.version',
    'ASS.service'
]);


AngularSeedSpm.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}]);

var home = require("./home/home");
var about = require("./about/about");
var intro = require("./intro/intro");
var version = require("./components/ver/version");
var service = require('./components/service/service');

angular.bootstrap(document, ['ASS']);