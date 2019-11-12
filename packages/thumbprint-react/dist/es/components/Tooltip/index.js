import { slicedToArray as _slicedToArray, defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import classNames from 'classnames';
import { tpSpace3 } from '@thumbtack/thumbprint-tokens';
import canUseDOM from '../../utils/can-use-dom.js';
import useCloseOnEscape from '../../utils/use-close-on-escape.js';
import ConditionalPortal from '../../utils/ConditionalPortal.js';
import { Manager, Reference, Popper } from 'react-popper';
import assign from 'lodash/assign';
import styles from './index.module.scss';

// tooltips from flickering in and out when the user moves their cursor rapidly over the launcher.
// Higher values are more likely to prevent flickering, but increased the perceived lag when the
// user _is_ trying to open the tooltip.

var OPEN_TIMEOUT = 100;

var WhenChildrenChange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WhenChildrenChange, _React$Component);

  function WhenChildrenChange() {
    _classCallCheck(this, WhenChildrenChange);

    return _possibleConstructorReturn(this, _getPrototypeOf(WhenChildrenChange).apply(this, arguments));
  }

  _createClass(WhenChildrenChange, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          children = _this$props.children,
          doProp = _this$props.do;

      if (children !== prevProps.children) {
        doProp();
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return WhenChildrenChange;
}(React.Component);

var doesWindowSupportTouch = function doesWindowSupportTouch() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
};

function Tooltip(_ref) {
  var _ref$container = _ref.container,
      container = _ref$container === void 0 ? 'body' : _ref$container,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'top' : _ref$position,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'dark' : _ref$theme,
      zIndex = _ref.zIndex,
      text = _ref.text,
      children = _ref.children,
      _ref$closeDelayLength = _ref.closeDelayLength,
      closeDelayLength = _ref$closeDelayLength === void 0 ? 200 : _ref$closeDelayLength;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      openTimeout = _useState4[0],
      setOpenTimeout = _useState4[1];

  var _useState5 = useState(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      closeTimeout = _useState6[0],
      setCloseTimeout = _useState6[1];

  var show = function show() {
    if (closeTimeout) {
      window.clearTimeout(closeTimeout);
    }

    setIsOpen(true);
  };

  var hide = function hide() {
    setIsOpen(false);
  };

  var onFocus = function onFocus() {
    if (!doesWindowSupportTouch()) {
      show();
    }
  };

  var onMouseEnter = function onMouseEnter() {
    if (!doesWindowSupportTouch()) {
      // Trigger the tooltip to show after a small delay to prevent flickering.
      setOpenTimeout(window.setTimeout(show, OPEN_TIMEOUT));
    }
  };

  var onMouseLeave = function onMouseLeave() {
    // By default this adds a small delay before closing to improve the user experience.
    setCloseTimeout(window.setTimeout(hide, closeDelayLength));

    if (openTimeout) {
      // When the mouse leaves we should clear any in-progress open timeouts, to prevent the
      // tooltip from showing after the user is no longer hovering over the launcher.
      clearTimeout(openTimeout);
    }
  };

  var onClick = function onClick() {
    if (doesWindowSupportTouch()) {
      if (isOpen) {
        hide();
      } else {
        show();
      }
    }
  };

  useCloseOnEscape(hide, canUseDOM); // Appends the tooltip right before `</body>` when true.

  var shouldDisplace = container === 'body';
  return React.createElement(Manager, null, React.createElement(Reference, null, function (_ref2) {
    var ref = _ref2.ref;
    return children({
      ref: ref,
      onMouseEnter: onMouseEnter,
      onFocus: onFocus,
      onMouseLeave: onMouseLeave,
      onBlur: hide,
      onClick: onClick,
      ariaLabel: text
    });
  }), React.createElement(ConditionalPortal, {
    shouldDisplace: shouldDisplace
  }, canUseDOM && isOpen && React.createElement(Popper, {
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

    var ref = _ref3.ref,
        style = _ref3.style,
        placement = _ref3.placement,
        arrowProps = _ref3.arrowProps,
        scheduleUpdate = _ref3.scheduleUpdate;
    return (// This function is documented within `react-popper`:
      // https://github.com/FezVrasta/react-popper
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
      React.createElement("div", {
        role: "tooltip",
        "data-test-id": "tooltip",
        className: classNames((_classNames = {}, _defineProperty(_classNames, styles.tooltip, true), _defineProperty(_classNames, styles.tooltipDark, theme === 'dark'), _defineProperty(_classNames, styles.tooltipLight, theme === 'light'), _classNames)),
        ref: ref,
        style: assign({}, style, {
          zIndex: zIndex
        }),
        "data-placement": placement,
        onMouseEnter: show,
        onMouseLeave: onMouseLeave,
        onClick: function onClick(event) {
          // This is to ensure the default event propagation is stopped when the tooltip
          // is created by portals.
          // https://reactjs.org/docs/portals.html#event-bubbling-through-portals
          // https://github.com/facebook/react/issues/11387
          if (shouldDisplace) {
            event.stopPropagation();
          } // This is to ensure the tooltip would be closed if it's clicked in touch screen
          // devices so it could easier to be toggled off.


          if (doesWindowSupportTouch()) {
            hide();
          }
        }
      }, React.createElement(WhenChildrenChange, {
        do: scheduleUpdate
      }, text), React.createElement("div", {
        className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.nubbin, true), _defineProperty(_classNames2, styles.nubbinTop, placement === 'top'), _defineProperty(_classNames2, styles.nubbinBottom, placement === 'bottom'), _defineProperty(_classNames2, styles.nubbinDark, theme === 'dark'), _defineProperty(_classNames2, styles.nubbinLight, theme === 'light'), _classNames2)),
        ref: arrowProps.ref,
        style: arrowProps.style
      }))
    );
  })));
}

export default Tooltip;
//# sourceMappingURL=index.js.map
