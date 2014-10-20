'use strict';

var home = angular.module('ASS.home', ['ngRoute']);

home.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when(
        '/home', {
            templateUrl: 'apps/src/home/main.html',
            controller: 'MainCtrl'
        }
    );
}]);

home.controller('MainCtrl', [function () {

}]);

module.exports = home;