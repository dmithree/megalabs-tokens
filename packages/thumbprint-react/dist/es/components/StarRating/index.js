import { defineProperty as _defineProperty, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import isNumber from 'lodash/isNumber';
import { tpColorYellow, tpColorGray } from '@thumbtack/thumbprint-tokens';
import noop from 'lodash/noop';
import clamp from 'lodash/clamp';
import times from 'lodash/times';
import styles from './index.module.scss';

var MAX_NUM_STARS = 5; // Smallest increment we render

var PRECISION = 0.5;

var StarIcon = function StarIcon(p) {
  return React.createElement("svg", _extends({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, p), React.createElement("path", {
    d: "M8 0c-.29675 0-.54325.1998361-.62.4733224L5.8065 5.333235H.64c-.35675 0-.64.3104371-.64.670142 0 .2199454.11.4165137.27675.533399C.38 6.6066557 4.45 9.5800656 4.45 9.5800656s-1.56325 4.8000874-1.5935 4.8767541c-.02325.0698798-.03975.1467978-.03975.2264808 0 .3599563.28975.6500328.6465.6500328.13675 0 .26325-.0432349.37-.1163825L8 12.1832131s4.07325 2.9668743 4.16675 3.0337377c.10625.0731476.23325.1163825.36975.1163825.35675 0 .64675-.2933442.64675-.6500328 0-.079683-.0165-.156601-.04-.2264808-.03-.0766667-1.593-4.8767541-1.593-4.8767541s4.0695-2.9734099 4.173-3.0432896C15.89 6.4198907 16 6.2233224 16 6.0001093c0-.3564372-.27675-.6668743-.6335-.6668743H10.2L8.61975.4733224C8.54325.1998361 8.2965 0 8 0"
  }));
};

function StarRating(_ref) {
  var _classNames;

  var rating = _ref.rating,
      _ref$hoverRating = _ref.hoverRating,
      hoverRating = _ref$hoverRating === void 0 ? 0 : _ref$hoverRating,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$onStarClick = _ref.onStarClick,
      onStarClick = _ref$onStarClick === void 0 ? noop : _ref$onStarClick,
      _ref$onStarHover = _ref.onStarHover,
      onStarHover = _ref$onStarHover === void 0 ? noop : _ref$onStarHover,
      _ref$onMouseLeave = _ref.onMouseLeave,
      onMouseLeave = _ref$onMouseLeave === void 0 ? noop : _ref$onMouseLeave;
  var clampedRating = clamp(rating, 0, MAX_NUM_STARS);
  var roundedRating = Math.round(clampedRating / PRECISION) * PRECISION;
  var ratio = (hoverRating || roundedRating) / MAX_NUM_STARS; // Only add title text if the stars are not clickable. Otherwise, it is confusing because the
  // title text will not match the index of the star that is being hovered on.
  // https://github.com/thumbtack/thumbprint-archive/issues/894

  var titleText = onStarClick !== noop ? undefined : "".concat(roundedRating, " out of ").concat(MAX_NUM_STARS, " star rating");
  return React.createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.rootSizeSmall, size === 'small'), _defineProperty(_classNames, styles.rootSizeMedium, size === 'medium'), _defineProperty(_classNames, styles.rootSizeLarge, size === 'large'), _defineProperty(_classNames, styles.rootIsClickable, onStarClick !== noop), _classNames)),
    title: titleText
  }, React.createElement("div", {
    className: "".concat(styles.row, " ").concat(styles.rowGold),
    "data-test-id": "star-row-gold",
    onMouseLeave: onMouseLeave,
    style: {
      width: isNumber(ratio) ? "".concat(ratio * 100, "%") : undefined
    }
  }, times(MAX_NUM_STARS, function (index) {
    var _classNames2, _classNames3;

    return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      React.createElement("div", {
        key: index,
        className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.starContainerSmall, size === 'small'), _defineProperty(_classNames2, styles.starContainerMedium, size === 'medium'), _defineProperty(_classNames2, styles.starContainerLarge, size === 'large'), _classNames2)),
        onClick: function onClick() {
          return onStarClick(index + 1);
        },
        onMouseEnter: function onMouseEnter() {
          return onStarHover(index + 1);
        }
      }, React.createElement(StarIcon, {
        fill: tpColorYellow,
        className: classNames((_classNames3 = {}, _defineProperty(_classNames3, styles.starSVG, true), _defineProperty(_classNames3, styles.starSVGSizeSmall, size === 'small'), _defineProperty(_classNames3, styles.starSVGSizeMedium, size === 'medium'), _defineProperty(_classNames3, styles.starSVGSizeLarge, size === 'large'), _classNames3))
      }))
    );
  })), React.createElement("div", {
    className: styles.row,
    "data-test-id": "star-row-gray",
    onMouseLeave: onMouseLeave
  }, times(MAX_NUM_STARS, function (index) {
    var _classNames4, _classNames5;

    return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      React.createElement("div", {
        key: index,
        className: classNames((_classNames4 = {}, _defineProperty(_classNames4, styles.starContainerSmall, size === 'small'), _defineProperty(_classNames4, styles.starContainerMedium, size === 'medium'), _defineProperty(_classNames4, styles.starContainerLarge, size === 'large'), _classNames4)),
        onClick: function onClick() {
          return onStarClick(index + 1);
        },
        onMouseEnter: function onMouseEnter() {
          onStarHover(index + 1);
        }
      }, React.createElement(StarIcon, {
        fill: tpColorGray,
        className: classNames((_classNames5 = {}, _defineProperty(_classNames5, styles.starSVG, true), _defineProperty(_classNames5, styles.starSVGSizeSmall, size === 'small'), _defineProperty(_classNames5, styles.starSVGSizeMedium, size === 'medium'), _defineProperty(_classNames5, styles.starSVGSizeLarge, size === 'large'), _classNames5))
      }))
    );
  })));
}

export default StarRating;
//# sourceMappingURL=index.js.map
