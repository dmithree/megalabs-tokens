import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useEffect } from 'react';
import 'prop-types';
import rotate from 'rotate-array';
import range from 'lodash/range';
import styles from './base-carousel.module.scss';

function BaseCarousel(_ref) {
  var children = _ref.children,
      _ref$selectedIndex = _ref.selectedIndex,
      selectedIndex = _ref$selectedIndex === void 0 ? 0 : _ref$selectedIndex,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === void 0 ? 400 : _ref$animationDuratio,
      _ref$visibleCount = _ref.visibleCount,
      visibleCount = _ref$visibleCount === void 0 ? 1 : _ref$visibleCount,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? '0px' : _ref$spacing;

  // When animating, `prevSelectedIndex` is the value of `selectedIndex` before the
  // animation began. Once the animation is complete, it becomes the same as `selectedIndex`.
  var _useState = useState(selectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      prevSelectedIndex = _useState2[0],
      setPrevSelectedIndex = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isSuspensed = _useState6[0],
      setIsSuspensed = _useState6[1];

  function reorder(items) {
    // The `prevSelectedIndex` doesn't update until the animation is done, so we want to
    // use that ordering until the animation is complete.
    return rotate(items, -1 * Math.floor(prevSelectedIndex));
  }

  useEffect(function () {
    if (selectedIndex !== prevSelectedIndex) {
      setIsAnimating(true);
      setIsSuspensed(false);
      setTimeout(function () {
        setIsAnimating(false);
        setIsSuspensed(true);
        setPrevSelectedIndex(selectedIndex); // We suspend the CSS animation property for a very brief window before
        // re-enabling. This gap allows the component to re-render the new list
        // without the items "sliding" back into place. Once the new items are set up,
        // we re-enable the animation property ready for the next transition.

        setTimeout(function () {
          setIsSuspensed(false);
        }, 50);
      }, animationDuration);
    }
  }, [animationDuration, prevSelectedIndex, selectedIndex]);
  var itemWidth = 1 / visibleCount; // If `selectedIndex` is `1.5`, this value is `0.5`. This is used when the consumer wants
  // to partially display children.

  var fractionalIndexOffset = Math.abs(prevSelectedIndex - Math.floor(prevSelectedIndex)); // The `adjustedIndex`, when animating, is the number of items to slide. If the value is
  // negative it means that we should slide to the left. It gets reset to `0` when the
  // animation is complete.

  var adjustedIndex = selectedIndex - prevSelectedIndex; // This is equal to `fractionalIndexOffset` in the resting state but changes while the
  // transition is occuring.

  var translateX = itemWidth * (adjustedIndex + fractionalIndexOffset) * -100;
  var numChildren = React.Children.count(children); // An array of the flex order of the items.

  var childOrders = reorder(range(numChildren)); // Sometimes we need to duplicate the children so that the carousel can display properly.
  // This is especially needed when animating. Imagine that a 4-item card with 3 visible
  // items wants to animate 2 items to the right. Normally, this would require 5 items to
  // animate without displaying an empty spot. Since there are only 4 items, we temporarily
  // duplicate the `children` until the animation is complete.

  var shouldRenderDuplicateChildren = isAnimating;
  return React.createElement("div", {
    className: styles.root
  }, React.createElement("ul", {
    className: styles.wrapper,
    style: {
      transform: "translateX(".concat(translateX, "%)"),
      transition: isSuspensed ? 'none' : "transform ".concat(animationDuration, "ms ease"),
      width: "calc(100% + ".concat(spacing, ")")
    }
  }, React.Children.map(children, function (child, i) {
    return React.createElement("li", {
      key: i,
      className: styles.item,
      style: {
        width: "".concat(itemWidth * 100, "%"),
        paddingRight: spacing,
        order: childOrders[i]
      }
    }, child);
  }), shouldRenderDuplicateChildren && React.Children.map(children, function (child, index) {
    return React.createElement("li", {
      key: numChildren + index,
      className: styles.item,
      style: {
        width: "".concat(itemWidth * 100, "%"),
        paddingRight: spacing,
        order: childOrders[index] + numChildren,
        transform: "translateX(".concat(numChildren * -200, "%)")
      }
    }, child);
  }), shouldRenderDuplicateChildren && React.Children.map(children, function (child, index) {
    return React.createElement("li", {
      key: numChildren + index * 2,
      className: styles.item,
      style: {
        width: "".concat(itemWidth * 100, "%"),
        paddingRight: spacing,
        order: (childOrders[index] + numChildren) * 2,
        transform: "translateX(".concat(numChildren * -100, "%)")
      }
    }, child);
  })));
}

export default BaseCarousel;
//# sourceMappingURL=base-carousel.js.map
