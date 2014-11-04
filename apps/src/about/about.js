'use strict';

var about = angular.module('ASS.about', ['ui.router']);

about.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'apps/src/about/main.html',
            controller: 'AboutCtrl'
        });
}]);

about.controller('AboutCtrl', [function () {

}]);

module.exports = about;