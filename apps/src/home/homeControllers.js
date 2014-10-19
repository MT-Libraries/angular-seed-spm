'use strict';

var homeControllers = angular.module('ASS.homeControllers', ['ngRoute']);

homeControllers.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when(
        '/home', {
            templateUrl: 'apps/src/home/main.html',
            controller: 'MainCtrl'
        }
    );
}]);

homeControllers.controller('MainCtrl', [function () {

}]);

module.exports = homeControllers;