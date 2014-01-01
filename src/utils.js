define([
  'jquery',
  'lodash',
  'viewport/src/settings'
], function($, _, settings) {

  var scrollY = function() {
    // Cross-browser determination of the the amount of pixels scrolled

    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  };

  var height = function() {
    // Returns the height of the viewport

    var height = window.innerHeight;

    if (settings.topPadding !== 0) {
      height -= settings.topPadding;
    }

    if (settings.bottomPadding !== 0) {
      height -= settings.bottomPadding;
    }

    return height;
  };

  var offsetOf = function(element) {
    // Returns a superset of jQuery(element).offset

    if (!element.jquery) {
      element = $(element);
    }

    var offset = element.offset();

    if (!offset) {
      console.log(element[0], offset)
    }

    if (settings.topPadding) {
      offset.top -= settings.topPadding;
    }

    offset.bottom = offset.top + element.outerHeight();

    return offset;
  };

  var positionOf = function(element) {

    var _scrollY = scrollY();
    var _height = height();

    return _.extend(
      {
        viewportTop: _scrollY,
        viewportBottom: _scrollY + _height,
        viewportHeight: _height
      },
      offsetOf(element)
    );

  };

  return {
    scrollY: scrollY,
    height: height,
    offsetOf: offsetOf,
    positionOf: positionOf
  };
});