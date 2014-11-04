/**
 * Created by thonatos on 14-10-20.
 */

var intro = angular.module('ASS.intro',['ui.router']);

intro.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('intro', {
            url: '/intro',
            templateUrl: 'apps/src/intro/main.html',
            controller: 'IntroCtrl'
        });
}]);

intro.controller('IntroCtrl',[function (){

}]);

module.exports = intro;