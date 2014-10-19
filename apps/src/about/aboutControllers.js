'use strict';

var aboutControllers = angular.module('ASS.aboutControllers', ['ngRoute']);

aboutControllers.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'apps/src/about/main.html',
        controller: 'AboutCtrl'
    });
}]);

aboutControllers.controller('AboutCtrl', [function () {

}]);

module.exports = aboutControllers;