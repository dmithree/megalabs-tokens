'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var Swipeable = _interopDefault(require('react-swipeable'));
var baseCarousel = require('./base-carousel.js');

function Carousel(_ref) {
  var children = _ref.children,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? '0px' : _ref$spacing,
      _ref$visibleCount = _ref.visibleCount,
      visibleCount = _ref$visibleCount === void 0 ? 1 : _ref$visibleCount,
      selectedIndex = _ref.selectedIndex,
      onSelectedIndexChange = _ref.onSelectedIndexChange;

  var _useState = React.useState(0),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      dragIndexOffset = _useState2[0],
      setDragIndexOffset = _useState2[1];

  var isDragging = dragIndexOffset !== 0;
  var containerRef = React.useRef(null);

  function onDrag(deltaX) {
    var size = containerRef.current ? containerRef.current.getBoundingClientRect() : null;

    if (size && size.width) {
      // Set the `dragIndexOffset` so that the carousel can visually move before we send
      // the new index to the parent.
      setDragIndexOffset(deltaX / size.width * visibleCount);
    }
  }

  function onDragEnd() {
    onSelectedIndexChange(selectedIndex + dragIndexOffset);
    setDragIndexOffset(0);
  }

  return React__default.createElement("div", {
    ref: containerRef
  }, React__default.createElement(Swipeable, {
    preventDefaultTouchmoveEvent: true,
    onSwiping: function onSwiping(_, deltaX) {
      return onDrag(deltaX);
    },
    onSwiped: onDragEnd
  }, React__default.createElement(baseCarousel.default, {
    selectedIndex: selectedIndex + dragIndexOffset,
    visibleCount: visibleCount,
    spacing: spacing,
    animationDuration: isDragging ? 0 : undefined
  }, children)));
}

exports.default = Carousel;
//# sourceMappingURL=index.js.map
