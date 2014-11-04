/**
 * Created by thonatos on 14-10-22.
 */

var _DEV = true;
var _PRO = false;
var _BSE = {};
var _APP = {};
var _URL = {};


<!-- We Add dynamic base attribute by run_env-->

if(_PRO){
    _URL = "/";
}else{
    _URL = "/angular-seed-spm/";
}
addBase(_URL);

<!-- We use different app-version by run_env-->

if (_DEV) {
    _APP = './apps/src/app';
    _BSE = './apps/spm_modules/';
} else {
    _APP = './apps/dist/angular-seed-spm/0.0.1/src/app';
    _BSE = './apps/dist';
}

seajs.config({base: _BSE});
seajs.use(_APP);


function addBase(addr){
    var baseTag = document.createElement("base");
    baseTag.setAttribute("href", addr);
    document.getElementsByTagName("head")[0].appendChild(baseTag);
}
