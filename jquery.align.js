/**
 * jquery.align.js
 * ===============
 * 
 * A jQuery plugin that provides cross-browser support for vertically
 * and horizontally aligning elements.
 *
 * Usage
 * -----
 * 
 * To use this plugin, simply call it with the appropriate options.
 *
 *      $('#element').align(options);
 * 
 *
 * Author
 * ------
 *
 * Robert Coker (mailto:rob@robertsays.com)
 * With inspiration from Neal Grosskopf (http://www.nealgrosskopf.com/tech/thread.php?pid=37)
 * 
 */

(function ($) {
    
    /**
     * @param o {Object}
     * @param o.vertical {Boolean} if true, the element will be vertically aligned
     * @param o.horizontal {Boolean} if true, the element will be horizontally aligned
     * @param o.wrap {Boolean} if true, the element will be wrapped in a container div for positioning
     * @param o.beforeAlign {Function} callback that occurs before the element is aligned
     * @param o.afterAlign {Function} callback that occurs after the element is aligned
     */
    
    $.fn.align = function(o) {
        o = $.extend({
                vertical: true,
                horizontal: false,
                wrap: false,
                beforeAlign: function() {},
                afterAlign: function() {}
        }, o || {});
        
        return this.each(function() {
            var element = $(this);
            
            o.beforeAlign.call(this);
            
            if (o.wrap) {
                element = element.wrap('<div></div>').parent().css('position', 'relative');
            }
            
            if (o.vertical) {
                var outerHeight = element.outerHeight();
                element.css({
                    marginTop: (-1 * (outerHeight / 2)) + 'px',
                    top: '50%'
                })
            }
            
            if (o.horizontal) {
                var outerWidth = element.outerWidth();
                element.css({
                    marginLeft: (-1 * (outerWidth / 2)) + 'px',
                    left: '50%'
                })
            }
            
            o.afterAlign.call(this);
        });
    }
})(jQuery);