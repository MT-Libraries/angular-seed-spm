/**
 * Created by thonatos on 14-10-30.
 */

var _debug = false;

var conf = {
    debug: function(){

        var _dev = {};

        if(_debug){
            _dev = false;
        }else{
            _dev = true;
        }
        return _dev;
    }
};

module.exports = conf;
