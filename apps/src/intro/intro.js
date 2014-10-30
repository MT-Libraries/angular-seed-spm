/**
 * Created by thonatos on 14-10-20.
 */

var intro = angular.module('ASS.intro',['ngRoute']);

intro.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/intro', {
        templateUrl: 'apps/src/intro/main.html',
        controller: 'IntroCtrl'
    });
}]);

intro.controller('IntroCtrl',[function (){

}]);

module.exports = intro;