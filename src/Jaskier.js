/*
 * JaSkier - mini js framework 
 * Copyright 2015, Paweł Sieniarski 
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
*/

// Universal Module Definition
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.Jaskier = factory(root.$);
    }
}(this, function ($) {
    
    var Jaskier = function() {
        if (this.el) {
            this.$el = $(this.el);  
        }
        
        this.ui && this._prepareUI();   
        this.events && this._bindEvents();
        this.breakpoints && this._prepareBreakpoints();
        
        if (typeof this.init == 'function') {
            this.init(); 
        }
    };

    // helper functions
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

        // ex. CamelCase('a','b','c') 
        // return aBc
        camelCase: function() {
            var args = [].slice.call(arguments);

            for(var i = 1; i < args.length; i++) {
                args[i] = args[i].charAt(0).toUpperCase() + args[i].slice(1);
            }

            return args.join('');
        },
    };

    Jaskier.extend = function(prototypeObj, instanceObj) {
        var that = this;

        var Child = function() {
            // inherit from Jaskier Constructor
            that.apply(this, arguments); 
            // add instanceObj props
            $.extend(this, instanceObj); 
        };

        // copy from Jaskier prototype and from obj 
        Child.prototype = $.extend({}, that.prototype, prototypeObj);

        return Child;
    };

    Jaskier.prototype = $.extend({}, helper, {
        currentBreakpoint: '',

        _prepareUI: function() {
            var ui = $.extend({}, this.ui);
            var newui = this.ui = {};  
            
            $.each(ui, function(name, selector) {
                selector = (selector == 'window') ? window : selector;
                newui[name] = $(selector); 
            });
        },

        _bindEvents: function() {
            var that = this; 

            $.each(this.events, function(str, funcname) {
                var arr = str.split(' ');
                var e = arr.shift();
                var selector = arr.join(' ');

                selector = (selector == 'window') ? window : selector;

                if (selector[0] === '@') {
                    selector = that.ui[selector.slice(1)];
                }  

                if (that.el) {
                    selector = that.$el.find(selector);
                } else {
                    selector = $(selector);
                }

                selector.on(e, that[funcname].bind(that));
            });
        },

        _prepareBreakpoints: function() {
            var that = this;
            var camelCase = this.camelCase;
            var breakpoints = this.breakpoints; 
            var bp = [];

            function match(mq, cb1, cb2, name) {
                if (mq.matches) {
                    that.currentBreakpoint = name;
                    if (cb1) {
                        cb1.apply(that, mq);
                    }
                } else {
                    if (that.currentBreakpoint === name) {
                        that.currentBreakpoint = '';
                    }

                    if (cb2) {
                        cb2.apply(that, mq);
                    }
                }
            }

            $.each(breakpoints, function(name, breakpoint) {
                var mq = window.matchMedia(breakpoint);     

                mq.addListener(function() {
                    match(mq, that[name], that[camelCase('not', name)], name);
                }); 

                match(mq, that[name], that[camelCase('not', name)], name);
            });
        }
    });

    // Just return a value to define the module export.
    return Jaskier;
}));





