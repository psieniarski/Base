/*
 * jQuery Placement plugin
 * Copyright 2014, Paweł Sieniarski 
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
*/

var $ = require('jquery');

var helper = {
    once: function(fn, cx) { 
        var result;

        return function() { 
            if(fn) {
                result = fn.apply(cx || this, arguments);
                fn = null;
            }

            return result;
        };
    },

    camelCase: function() {
        var args = [].slice.call(arguments);

        for(var i = 1; i < args.length; i++) {
            args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1);
        }

        return args.join('');
    },
};