'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var isNumber = _interopDefault(require('lodash/isNumber'));
var tokens = require('@thumbtack/thumbprint-tokens');
var badge = require('./subcomponents/badge.js');
var styles = _interopDefault(require('./index.module.scss'));
var index = require('../Image/index.js');

var dimensions = {
  xsmall: '32px',
  small: '48px',
  medium: '72px',
  large: '100px',
  xlarge: '140px'
};

var CheckIcon = function CheckIcon() {
  return React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 13"
  }, React__default.createElement("path", {
    d: "M17 .943c0 .26-.1.5-.28.69L5.81 12.713c-.18.18-.43.28-.69.29-.26 0-.51-.11-.69-.29 0 0-3.79-3.78-4.16-4.16a.942.942 0 0 1-.27-.69c0-.26.11-.5.3-.68.39-.36 1-.34 1.37.04.26.27 2.33 2.34 3.44 3.44L15.33.293c.37-.38.98-.39 1.37-.03.18.18.29.42.3.68",
    fillRule: "evenodd"
  }));
};

var STYLES = [{
  color: tokens.tpColorIndigo600,
  backgroundColor: tokens.tpColorIndigo100
}, {
  color: tokens.tpColorGreen600,
  backgroundColor: tokens.tpColorGreen100
}, {
  color: tokens.tpColorYellow600,
  backgroundColor: tokens.tpColorYellow100
}, {
  color: tokens.tpColorRed600,
  backgroundColor: tokens.tpColorRed100
}, {
  color: tokens.tpColorPurple600,
  backgroundColor: tokens.tpColorPurple100
}, {
  color: tokens.tpColorBlue600,
  backgroundColor: tokens.tpColorBlue100
}];

var getStyle = function getStyle(initials) {
  return initials ? STYLES[initials.charCodeAt(0) % STYLES.length] : {
    color: tokens.tpColorBlack,
    backgroundColor: tokens.tpColorGray200
  };
};

var EntityAvatar = React.forwardRef(function (props, outerRef) {
  var _classNames;

  var imageUrl = props.imageUrl,
      _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      initial = props.initial,
      fullName = props.fullName,
      _props$isOnline = props.isOnline,
      isOnline = _props$isOnline === void 0 ? false : _props$isOnline;
  return React__default.createElement("div", {
    className: classNames(styles.root, (_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootXsmall, size === 'xsmall'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootSmall, size === 'small'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootMedium, size === 'medium'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootLarge, size === 'large'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootXlarge, size === 'xlarge'), _classNames)),
    style: isNumber(size) ? {
      width: size,
      height: size
    } : {
      width: dimensions[size],
      height: dimensions[size]
    }
  }, imageUrl ? React__default.createElement(index.default, {
    className: styles.squareAvatar,
    src: imageUrl,
    alt: fullName && "Avatar for ".concat(fullName),
    height: typeof size === 'string' ? dimensions[size] : "".concat(size, "px"),
    ref: outerRef
  }) : React__default.createElement("span", {
    className: "".concat(styles.initialsAvatar, " ").concat(styles.squareAvatar),
    style: getStyle(initial),
    title: fullName && "Avatar for ".concat(fullName)
  }, initial), isOnline && React__default.createElement(badge.default, {
    size: typeof size === 'string' ? size : 'medium',
    type: "entity"
  }));
});
// Needed because of the `forwardRef`.
EntityAvatar.displayName = 'EntityAvatar';
var UserAvatar = React.forwardRef(function (props, outerRef) {
  var _classNames2;

  var imageUrl = props.imageUrl,
      _props$size2 = props.size,
      size = _props$size2 === void 0 ? 'small' : _props$size2,
      initials = props.initials,
      fullName = props.fullName,
      _props$isOnline2 = props.isOnline,
      isOnline = _props$isOnline2 === void 0 ? false : _props$isOnline2,
      isChecked = props.isChecked;
  return React__default.createElement("div", {
    className: classNames(styles.root, (_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.rootXsmall, size === 'xsmall'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.rootSmall, size === 'small'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.rootMedium, size === 'medium'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.rootLarge, size === 'large'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.rootXlarge, size === 'xlarge'), _classNames2)),
    style: isNumber(size) ? {
      width: size,
      height: size
    } : {
      width: dimensions[size],
      height: dimensions[size]
    }
  }, imageUrl ? React__default.createElement(index.default, {
    className: styles.circleAvatar,
    src: imageUrl,
    alt: fullName && "Avatar for ".concat(fullName),
    height: typeof size === 'string' ? dimensions[size] : "".concat(size, "px"),
    ref: outerRef
  }) : React__default.createElement("span", {
    className: "".concat(styles.initialsAvatar, " ").concat(styles.circleAvatar),
    style: getStyle(initials),
    title: fullName && "Avatar for ".concat(fullName)
  }, initials), (isOnline || isChecked) && React__default.createElement(badge.default, {
    size: typeof size === 'string' ? size : 'medium',
    type: "user"
  }, isChecked && React__default.createElement(CheckIcon, null)));
});
// Needed because of the `forwardRef`.
UserAvatar.displayName = 'UserAvatar';

exports.EntityAvatar = EntityAvatar;
exports.UserAvatar = UserAvatar;
//# sourceMappingURL=index.js.map
