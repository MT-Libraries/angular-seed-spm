/**
 * Created by thonatos on 14-10-22.
 */
var _DEV = false;
var _PRO = false;
var _APP = {};
var _CNF = {};

<!-- We Add dynamic base attribute by run_env-->

var baseTag = document.createElement("base");

if(_PRO){
    baseTag.setAttribute("href", "/");
}else{
    baseTag.setAttribute("href", "/angular-seed-spm/");
}

document.getElementsByTagName("head")[0].appendChild(baseTag);


<!-- Conf for SeaJS -->

if (_DEV) {

    _APP = './apps/src/app';
    _CNF = {
        base: './apps/spm_modules/'
    };



} else {

    _APP = './apps/dist/angular-seed-spm/0.0.1/src/app-debug';
    _CNF = {
        base: './apps/dist'
    };

}


seajs.config(_CNF);
seajs.use(_APP);