'use strict';

/********************************************************
 * STATIC
 ********************************************************/

var logger = require('../components/util/logger');

var home = angular.module('ASS.home', ['ui.router']);

/********************************************************
 * CONTROLLER
 ********************************************************/

home.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
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

home.controller('HomeCtrl', [function () {
    logger.log('this is logger test');
}]);

home.controller('MainCtrl', ['$scope', 'shareService', function ($scope, shareService) {

    shareService.asy().then(function (response) {
        console.log(response);
    });

}]);


module.exports = home;