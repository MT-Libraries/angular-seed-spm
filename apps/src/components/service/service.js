/**
 * Created by thonatos on 14-10-31.
 */

var service = angular.module('ASS.service', [
    'ASS.service.shareService'
]);

var share = require('./shareService');

module.exports = service;
