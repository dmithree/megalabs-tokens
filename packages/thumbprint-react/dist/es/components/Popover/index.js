import { slicedToArray as _slicedToArray, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import classNames from 'classnames';
import { tpSpace3 } from '@thumbtack/thumbprint-tokens';
import canUseDOM from '../../utils/can-use-dom.js';
import Themed from '../UIAction/themed.js';
import '../UIAction/plain.js';
import { TextButton } from '../Button/index.js';
import '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import NavigationCloseTiny from '../../icons/navigation-close-tiny.js';
import '../../icons/navigation-close-small.js';
import '../../icons/navigation-close-medium.js';
import '../../icons/alert-check.js';
import '../../icons/alert-info.js';
import '../../icons/alert-warning.js';
import useCloseOnEscape from '../../utils/use-close-on-escape.js';
import useFocusTrap from '../../utils/use-focus-trap.js';
import ConditionalPortal from '../../utils/ConditionalPortal.js';
import { Manager, Reference, Popper } from 'react-popper';
import startsWith from 'lodash/startsWith';
import styles from './index.module.scss';

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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      wrapperEl = _useState2[0],
      setWrapperEl = _useState2[1];

  var shouldTrapFocus = canUseDOM && !!wrapperEl;
  var shouldBindEscListener = canUseDOM && isOpen;
  useCloseOnEscape(onCloseClick, shouldBindEscListener);
  useFocusTrap(wrapperEl, shouldTrapFocus);
  return React.createElement(Manager, null, React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return launcher({
      ref: ref
    });
  }), React.createElement(ConditionalPortal, {
    shouldDisplace: shouldDisplace
  }, canUseDOM && React.createElement(Popper, {
    placement: position,
    modifiers: {
      offset: {
        offset: "0, ".concat(tpSpace3)
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
      React.createElement("div", {
        role: "dialog",
        "aria-label": accessibilityLabel,
        tabIndex: -1,
        ref: function ref(el) {
          setWrapperEl(el);
          popperRef(el);
        },
        className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.open, isOpen), _classNames)),
        style: style,
        "data-placement": placement
      }, children, React.createElement("div", {
        className: styles.closeButton
      }, React.createElement(TextButton, {
        accessibilityLabel: "Close popover",
        iconLeft: React.createElement(NavigationCloseTiny, {
          className: styles.closeButtonIcon
        }),
        theme: "inherit",
        onClick: onCloseClick
      })), React.createElement("div", {
        className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.nubbin, true), _defineProperty(_classNames2, styles.nubbinTop, startsWith(placement, 'bottom')), _defineProperty(_classNames2, styles.nubbinBottom, startsWith(placement, 'top')), _defineProperty(_classNames2, styles.nubbinLeft, startsWith(placement, 'right')), _defineProperty(_classNames2, styles.nubbinRight, startsWith(placement, 'left')), _classNames2)),
        ref: arrowProps.ref,
        style: arrowProps.style
      }))
    );
  })));
}

var PopoverTitle = function PopoverTitle(_ref4) {
  var children = _ref4.children;
  return React.createElement("div", {
    className: styles.popoverTitle
  }, children);
};

var PopoverBody = function PopoverBody(_ref5) {
  var children = _ref5.children;
  return React.createElement("div", {
    className: styles.popoverBody
  }, children);
};

var PopoverPrimaryButton = function PopoverPrimaryButton(_ref6) {
  var children = _ref6.children,
      onClick = _ref6.onClick;
  return React.createElement(Themed, {
    size: "small",
    onClick: onClick,
    theme: "popover-primary"
  }, children);
};

var PopoverSecondaryButton = function PopoverSecondaryButton(_ref7) {
  var children = _ref7.children,
      onClick = _ref7.onClick,
      to = _ref7.to;
  return React.createElement(Themed, {
    size: "small",
    onClick: onClick,
    to: to,
    theme: "popover-secondary",
    shouldOpenInNewTab: true
  }, children);
};

export default Popover;
export { PopoverBody, PopoverPrimaryButton, PopoverSecondaryButton, PopoverTitle };
//# sourceMappingURL=index.js.map
