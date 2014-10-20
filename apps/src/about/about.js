'use strict';

var about = angular.module('ASS.about', ['ngRoute']);

about.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'apps/src/about/main.html',
        controller: 'AboutCtrl'
    });
}]);

about.controller('AboutCtrl', [function () {

}]);

module.exports = about;