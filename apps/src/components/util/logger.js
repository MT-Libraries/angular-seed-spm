/**
 * Created by thonatos on 14-10-30.
 */

var conf = require('../conf/conf');

var logger = {
    log: function(str){
        if(conf.debug()){
            console.log(str); // just log message with debug-true
        }
    }
};

module.exports = logger;