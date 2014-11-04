/**
 * Created by thonatos on 14-10-31.
 */

var shareService = angular.module('ASS.service.shareService', [])
    .factory('shareService', ['$http', function ($http) {

        var _data = {};

        return ({
            add: _add,
            get: _get,
            asy: _async
        });

        // Public Method


        function _add(parmas) {
            _data = parmas;
        }

        function _get() {
            return _data;
        }

        function _async() {
            var promise = $http.get('data/test.json').then(function (response) {
                // The then function here is an opportunity to modify the response
                //console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    }]);

module.exports = shareService;
