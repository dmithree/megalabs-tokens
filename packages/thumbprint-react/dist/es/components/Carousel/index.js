import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useRef } from 'react';
import Swipeable from 'react-swipeable';
import BaseCarousel from './base-carousel.js';

function Carousel(_ref) {
  var children = _ref.children,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? '0px' : _ref$spacing,
      _ref$visibleCount = _ref.visibleCount,
      visibleCount = _ref$visibleCount === void 0 ? 1 : _ref$visibleCount,
      selectedIndex = _ref.selectedIndex,
      onSelectedIndexChange = _ref.onSelectedIndexChange;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      dragIndexOffset = _useState2[0],
      setDragIndexOffset = _useState2[1];

  var isDragging = dragIndexOffset !== 0;
  var containerRef = useRef(null);

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

  return React.createElement("div", {
    ref: containerRef
  }, React.createElement(Swipeable, {
    preventDefaultTouchmoveEvent: true,
    onSwiping: function onSwiping(_, deltaX) {
      return onDrag(deltaX);
    },
    onSwiped: onDragEnd
  }, React.createElement(BaseCarousel, {
    selectedIndex: selectedIndex + dragIndexOffset,
    visibleCount: visibleCount,
    spacing: spacing,
    animationDuration: isDragging ? 0 : undefined
  }, children)));
}

export default Carousel;
//# sourceMappingURL=index.js.map
