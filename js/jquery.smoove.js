/*!
* jQuery Smoove v0.2.7 (http://smoove.donlabs.com)
* Copyright (c) 2014 Adam Bouqdib
* Licensed under GPL-2.0 (http://abemedia.co.uk/license) 
*/

$(function() {
	$('.fadeInBlock').smoove({offset:'40%'});
});

(function ($, window, document){
    
    $.fn.smoove = function (options){
        $.fn.smoove.init(this, $.extend({}, $.fn.smoove.defaults, options));
        return this;
    };
    
    $.fn.smoove.items = [];
    $.fn.smoove.loaded = false;
    
    $.fn.smoove.defaults = {
        offset: 150,
        opacity: 0,
        transition: "all 1s ease, opacity 1.5s ease",
        transformStyle: 'preserve-3d',
        transformOrigin: false,
        perspective: 1000
    };

    $.fn.smoove.init = function (items, settings){
        items.each(function() {
            var $item = $(this),
                params = $item.params = $.extend({}, settings, $item.data());
                
            $item.params.opacity = $item.params.opacity / 100;
            $item.data('top', $item.offset().top);
                
            params.transition = crossBrowser('transition', params.transition, 'transform');
            $item.css(params.transition);
            
            $.fn.smoove.items.push($item);
        });
        
        // function for adding vendor prefixes
        function crossBrowser(property, value, prefix) {
        
            function ucase(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            
            var vendor = ['webkit','moz','ms','o'],
                properties = {};
                
            for(var i = 0; i < vendor.length; i++) {
                if(prefix) {
                    value = value.replace(prefix, '-' + vendor[i] + '-' + prefix);
                }
                properties[ucase(vendor[i]) + ucase(property)] = value;
            }
            properties[property] = value;
            
            return properties;
        }
        
        // add event handlers
        if(!$.fn.smoove.loaded) {
            $.fn.smoove.loaded = true;
            
            var didScroll = false,
                oldScroll = 0,
                oldHeight = $(window).height(),
                oldWidth = $(window).width(),
                oldDocHeight = $(document).height(),
                resizing;
        
            // naughty way of avoiding vertical scrollbars when items slide in/out from the side
           /* if($('body').width() === $(window).width()) {
                $('body').css('overflow-x','hidden');
            }*/
                
            
            
            $(window).on('load', function() {
                smooveIt();
                
                // throttle scroll handler
                $(window).scroll(function() {
                    didScroll = true;
                });
                setInterval(function() {
                    if ( didScroll ) {
                        didScroll = false;
                        var scrolltop = $(window).scrollTop(),
                            direction = (scrolltop < oldScroll) ? direction = 'up' : 'down';
                        oldScroll = scrolltop;
                        smooveIt(direction);
                    }
                }, 250);
            });
        }
        
        function smooveIt(direction) {
            for(var i = 0; i < $.fn.smoove.items.length; i++) {
                var $item = $.fn.smoove.items[i],
                    params = $item.params,
                    height = $(window).height(),
                    // if direction isn't set, set offset to 0 to avoid hiding objects that are above the fold
                    offset = (!direction || direction === 'down' && $item.css('opacity') === '1') ? 0 : params.offset,
                    itemtop = $(window).scrollTop() + height - $item.data('top');
                    
                // offset in %
                if(typeof offset === 'string' && offset.indexOf('%')) {
                    offset = parseInt(offset) / 100 * height;
                }
                
                if(itemtop < offset) {
                    if(params.opacity !== false) {
                        $item.css({opacity: params.opacity});
                    }
                    
                    var transforms = [],
                        properties = ['move','move3D','moveX','moveY','moveZ','rotate','rotate3d','rotateX','rotateY','rotateZ','scale','scale3d','scaleX','scaleY','skew','skewX','skewY'];
                        
                    for(var p = 0; p < properties.length; p++) {
                        if(typeof params[properties[p]] !== "undefined") {
                            transforms[properties[p]] = params[properties[p]];
                        }
                    }
                    
                    var transform = '';
                    for(var t in transforms) {
                        transform += t.replace('move', 'translate') + '(' + transforms[t] + ') ';
                    }
                    if(transform) {
                        $item.css(crossBrowser('transform', transform));
                       // $item.parent().css(crossBrowser('perspective', params.perspective));
                        $item.parent().css(crossBrowser('transformStyle', params.transformstyle));
                    
                        if(params.transformOrigin) {
                            $item.css(crossBrowser('transformOrigin', params.transformOrigin));
                        }
                    }
                }
                else {
                    $item.css('opacity', 1).css(crossBrowser('transform', ''));
                }
            }
        }
    };

}( jQuery, window, document ));