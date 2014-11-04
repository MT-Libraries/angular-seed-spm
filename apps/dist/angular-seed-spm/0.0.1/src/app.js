define("angular-seed-spm/0.0.1/src/app",[],function(e){"use strict";var r=angular.module("ASS",["ui.router","ASS.home","ASS.intro","ASS.about","ASS.version","ASS.service"]);r.config(["$stateProvider","$urlRouterProvider",function(e,r){r.otherwise("/home")}]);e("angular-seed-spm/0.0.1/src/home/home"),e("angular-seed-spm/0.0.1/src/about/about"),e("angular-seed-spm/0.0.1/src/intro/intro"),e("angular-seed-spm/0.0.1/src/components/ver/version"),e("angular-seed-spm/0.0.1/src/components/service/service");angular.bootstrap(document,["ASS"])}),define("angular-seed-spm/0.0.1/src/home/home",[],function(e,r,n){"use strict";var o=e("angular-seed-spm/0.0.1/src/components/util/logger"),t=angular.module("ASS.home",["ui.router"]);t.config(["$stateProvider","$urlRouterProvider",function(e){e.state("home",{url:"/home",views:{"":{templateUrl:"apps/src/home/layout.html",controller:"HomeCtrl"},"head@home":{templateUrl:"apps/src/home/head.html"},"main@home":{templateUrl:"apps/src/home/main.html",controller:"MainCtrl"}}})}]),t.controller("HomeCtrl",[function(){o.log("this is logger test")}]),t.controller("MainCtrl",["$scope","shareService",function(e,r){r.asy().then(function(e){console.log(e)})}]),n.exports=t}),define("angular-seed-spm/0.0.1/src/components/util/logger",[],function(e,r,n){var o=e("angular-seed-spm/0.0.1/src/components/conf/conf"),t={log:function(e){o.debug()&&console.log(e)}};n.exports=t}),define("angular-seed-spm/0.0.1/src/components/conf/conf",[],function(e,r,n){var o=!1,t={debug:function(){var e={};return e=o?!1:!0}};n.exports=t}),define("angular-seed-spm/0.0.1/src/about/about",[],function(e,r,n){"use strict";var o=angular.module("ASS.about",["ui.router"]);o.config(["$stateProvider","$urlRouterProvider",function(e){e.state("about",{url:"/about",templateUrl:"apps/src/about/main.html",controller:"AboutCtrl"})}]),o.controller("AboutCtrl",[function(){}]),n.exports=o}),define("angular-seed-spm/0.0.1/src/intro/intro",[],function(e,r,n){var o=angular.module("ASS.intro",["ui.router"]);o.config(["$stateProvider","$urlRouterProvider",function(e){e.state("intro",{url:"/intro",templateUrl:"apps/src/intro/main.html",controller:"IntroCtrl"})}]),o.controller("IntroCtrl",[function(){}]),n.exports=o}),define("angular-seed-spm/0.0.1/src/components/ver/version",[],function(e,r,n){"use strict";var o=angular.module("ASS.version",["ASS.version.interpolate-filter","ASS.version.version-directive"]);o.value("version","0.1");e("angular-seed-spm/0.0.1/src/components/ver/interpolate-filter"),e("angular-seed-spm/0.0.1/src/components/ver/version-directive");n.exports=o}),define("angular-seed-spm/0.0.1/src/components/ver/interpolate-filter",[],function(e,r,n){"use strict";var o=angular.module("ASS.version.interpolate-filter",[]).filter("interpolate",["version",function(e){return function(r){return String(r).replace(/\%VERSION\%/gm,e)}}]);n.exports=o}),define("angular-seed-spm/0.0.1/src/components/ver/version-directive",[],function(e,r,n){"use strict";var o=angular.module("ASS.version.version-directive",[]).directive("appVersion",["version",function(e){return function(r,n){n.text(e)}}]);n.exports=o}),define("angular-seed-spm/0.0.1/src/components/service/service",[],function(e,r,n){{var o=angular.module("ASS.service",["ASS.service.shareService"]);e("angular-seed-spm/0.0.1/src/components/service/shareService")}n.exports=o}),define("angular-seed-spm/0.0.1/src/components/service/shareService",[],function(e,r,n){var o=angular.module("ASS.service.shareService",[]).factory("shareService",["$http",function(e){function r(e){t=e}function n(){return t}function o(){var r=e.get("data/test.json").then(function(e){return e.data});return r}var t={};return{add:r,get:n,asy:o}}]);n.exports=o});