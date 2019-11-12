'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var tokens = require('@thumbtack/thumbprint-tokens');
var canUseDom = require('../../utils/can-use-dom.js');
var themed = require('../UIAction/themed.js');
require('../UIAction/plain.js');
var index = require('../Button/index.js');
require('../../icons/content-actions-check-small.js');
require('../../icons/navigation-caret-down-small.js');
var navigationCloseTiny = require('../../icons/navigation-close-tiny.js');
require('../../icons/navigation-close-small.js');
require('../../icons/navigation-close-medium.js');
require('../../icons/alert-check.js');
require('../../icons/alert-info.js');
require('../../icons/alert-warning.js');
var useCloseOnEscape = require('../../utils/use-close-on-escape.js');
var useFocusTrap = require('../../utils/use-focus-trap.js');
var ConditionalPortal = require('../../utils/ConditionalPortal.js');
var reactPopper = require('react-popper');
var startsWith = _interopDefault(require('lodash/startsWith'));
var styles = _interopDefault(require('./index.module.scss'));

function Popover(_ref) {
  var children = _ref.children,
      launcher = _ref.launcher,
      onCloseClick = _ref.onCloseClick,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? 'body' : _ref$container,
      _ref$accessibilityLab = _ref.accessibilityLabel,
      accessibilityLabel = _ref$accessibilityLab === void 0 ? 'Popover' : _ref$accessibilityLab;
  // Appends the tooltip right before `</body>` when true. Used to prevent z-index and positioning
  // issues.
  var shouldDisplace = container === 'body'; // Using `useState` instead of `useRef `to allow multiple refs. See Image for another example.

  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      wrapperEl = _useState2[0],
      setWrapperEl = _useState2[1];

  var shouldTrapFocus = canUseDom.default && !!wrapperEl;
  var shouldBindEscListener = canUseDom.default && isOpen;
  useCloseOnEscape.default(onCloseClick, shouldBindEscListener);
  useFocusTrap.default(wrapperEl, shouldTrapFocus);
  return React__default.createElement(reactPopper.Manager, null, React__default.createElement(reactPopper.Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return launcher({
      ref: ref
    });
  }), React__default.createElement(ConditionalPortal.default, {
    shouldDisplace: shouldDisplace
  }, canUseDom.default && React__default.createElement(reactPopper.Popper, {
    placement: position,
    modifiers: {
      offset: {
        offset: "0, ".concat(tokens.tpSpace3)
      },
      preventOverflow: {
        boundariesElement: 'window'
      }
    },
    positionFixed: false
  }, function (_ref3) {
    var _classNames, _classNames2;

    var popperRef = _ref3.ref,
        style = _ref3.style,
        placement = _ref3.placement,
        arrowProps = _ref3.arrowProps;
    return (// Use tabIndex="-1" to allow programmatic focus (as initialFocus node
      // for focus-trap) but not be tabbable by user.
      React__default.createElement("div", {
        role: "dialog",
        "aria-label": accessibilityLabel,
        tabIndex: -1,
        ref: function ref(el) {
          setWrapperEl(el);
          popperRef(el);
        },
        className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.open, isOpen), _classNames)),
        style: style,
        "data-placement": placement
      }, children, React__default.createElement("div", {
        className: styles.closeButton
      }, React__default.createElement(index.TextButton, {
        accessibilityLabel: "Close popover",
        iconLeft: React__default.createElement(navigationCloseTiny.default, {
          className: styles.closeButtonIcon
        }),
        theme: "inherit",
        onClick: onCloseClick
      })), React__default.createElement("div", {
        className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbin, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinTop, startsWith(placement, 'bottom')), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinBottom, startsWith(placement, 'top')), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinLeft, startsWith(placement, 'right')), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.nubbinRight, startsWith(placement, 'left')), _classNames2)),
        ref: arrowProps.ref,
        style: arrowProps.style
      }))
    );
  })));
}

var PopoverTitle = function PopoverTitle(_ref4) {
  var children = _ref4.children;
  return React__default.createElement("div", {
    className: styles.popoverTitle
  }, children);
};

var PopoverBody = function PopoverBody(_ref5) {
  var children = _ref5.children;
  return React__default.createElement("div", {
    className: styles.popoverBody
  }, children);
};

var PopoverPrimaryButton = function PopoverPrimaryButton(_ref6) {
  var children = _ref6.children,
      onClick = _ref6.onClick;
  return React__default.createElement(themed.default, {
    size: "small",
    onClick: onClick,
    theme: "popover-primary"
  }, children);
};

var PopoverSecondaryButton = function PopoverSecondaryButton(_ref7) {
  var children = _ref7.children,
      onClick = _ref7.onClick,
      to = _ref7.to;
  return React__default.createElement(themed.default, {
    size: "small",
    onClick: onClick,
    to: to,
    theme: "popover-secondary",
    shouldOpenInNewTab: true
  }, children);
};

exports.PopoverBody = PopoverBody;
exports.PopoverPrimaryButton = PopoverPrimaryButton;
exports.PopoverSecondaryButton = PopoverSecondaryButton;
exports.PopoverTitle = PopoverTitle;
exports.default = Popover;
//# sourceMappingURL=index.js.map
