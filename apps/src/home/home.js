'use strict';

/********************************************************
 * STATIC
 ********************************************************/

var logger = require('../components/util/logger');

var home = angular.module('ASS.home', ['ngRoute']);

/********************************************************
 * CONTROLLER
 ********************************************************/

home.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when(
        '/home', {
            templateUrl: 'apps/src/home/main.html',
            controller: 'MainCtrl'
        }
    );
}]);

home.controller('MainCtrl', [function () {
    logger.log('this is logger test');
}]);

module.exports = home;