/**
 * Helper function to get the jScrollPane container of this element
 *
 * @returns {*}
 */
$.fn.getParentJScrollPane = function() {
    var $scrollable_parent = $(this).parents('.jspScrollable:first');
    if ($scrollable_parent.size() > 0) {
        var $jsp = $scrollable_parent.data('jsp');
        if ($jsp) {
            return $jsp;
        } else {
            return false;
        }
    }
}

/**
 * Find jQuery Element in an jQuery array of elements and return its index OR -1 if not found.
 * Pretty similar to the $.inArray, but will match the object IDs.
 *
 *
 * @param el
 * @param arr
 * @returns int -1 or key index
 */
$.elementInArray = function(el, arr) {
    var found = $.map(
        arr,
        function(n, i) {
            return el.is(n) ? i : undefined;
        }
    );
    return found.length > 0 ? found[0] : -1;
};

/**
 * Case insensitive :istartswith.
 *
 * @param a
 * @param i
 * @param m
 * @returns {boolean}
 */
jQuery.expr[':'].istartswith = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) == 0;
};

/**
 * Get a specific attribute across a nodelist
 * @param {String} attr attribute
 */
$.fn.attrs = function(attr) {
    var i = 0, l = this.length, result = {};
    while (l > i) {
        var val = this[i++].getAttribute(attr);
        if (val) {
            result[val] = 1;
        }
    }
    return Object.keys(result);
};

$.fn.visible = function (e, i)
{ // https://github.com/teamdf/jquery-visible
    var a = $(this).eq(0),
        f = a.get(0),
        c = $(window),
        g = c.scrollTop();
    c = g + c.height() /*- ($('.transfer-panel').height() || 48)*/;
    var b = a.offset().top,
        h = b + a.height();
    a = e === true ? h : b;
    b = e === true ? b : h;
    return !!(i === true ? f.offsetWidth * f.offsetHeight : true) && b <= c && a >= g
};

// Based on http://stackoverflow.com/a/10835425
$.fn.removeClassWith = function(pfx)
{
    var i = 0, l = this.length, n;
    while (l > i)
    {
        if ((n = this[i++]).className)
            n.className = $.trim(n.className.split(" ")
                .filter(function(c) {
                    return c.lastIndexOf(pfx, 0) !== 0;
                }).join(" "));
    }
    return this;
};

/**
 * Shortcut to count object keys
 */
$.len = function(obj) {
    return Object.keys(obj).length;
};

/**
 * Helper to trigger resize once within a second
 */
$.tresizer = function tresizer() {
    if ($.tresizer.last !== -1) {

        setTimeout(function tresizer() {
            $.tresizer.last = Date.now();
            $(window).trigger('resize');
        }, 280);
        $.tresizer.last = -1;
    }
};
$.tresizer.last = 0;

/*
// @crodas -- http://stackoverflow.com/a/2200886/1608408
(function() {
	var orig = $.fn.remove;
	$.fn.remove = function() {
		$(this).trigger("remove")
		return orig.apply(this, arguments);
	}
})();
*/

/**
 *	Making the unbind/bind in a single call
 *	Less error prone, less code lines :-)
 *	@crodas
 */
jQuery.fn.extend({
	rebind: function(actions, callback) {
		return this.each(function() {
			var $this = $(this);
			$this.unbind(actions);
			$this.bind(actions, callback);
		});
	}
});
