import { defineProperty as _defineProperty, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import warning from 'warning';
import getAnchorProps from './get-anchor-props.js';
import getButtonProps from './get-button-props.js';
import styles from './plain.module.scss';

var Plain = React.forwardRef(function (_ref, ref) {
  var _classNames2;

  var children = _ref.children,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      to = _ref.to,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$shouldOpenInNewT = _ref.shouldOpenInNewTab,
      shouldOpenInNewTab = _ref$shouldOpenInNewT === void 0 ? false : _ref$shouldOpenInNewT,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseOver = _ref.onMouseOver,
      onFocus = _ref.onFocus,
      onMouseLeave = _ref.onMouseLeave,
      onBlur = _ref.onBlur,
      accessibilityLabel = _ref.accessibilityLabel,
      dataTest = _ref.dataTest;
  warning(children || accessibilityLabel || iconLeft && children, 'The prop `accessibilityLabel` must be provided to the button or link if `iconLeft` or `iconRight` are provided but `children` is not. This helps users on screen readers navigate our content.');
  var newChildren = children;

  if (iconLeft || iconRight) {
    var _classNames;

    newChildren = React.createElement("span", {
      className: styles.flexCenter
    }, iconLeft, children && React.createElement("span", {
      className: classNames((_classNames = {}, _defineProperty(_classNames, styles.textContainer, true), _defineProperty(_classNames, styles.textContainerLeft, iconLeft), _defineProperty(_classNames, styles.textContainerRight, iconRight), _classNames))
    }, children), iconRight);
  }

  var commonProps = {
    disabled: isDisabled,
    children: newChildren,
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.plain, true), _defineProperty(_classNames2, styles.plainThemePrimary, theme === 'primary'), _defineProperty(_classNames2, styles.plainThemeSecondary, theme === 'secondary'), _defineProperty(_classNames2, styles.plainThemeTertiary, theme === 'tertiary'), _defineProperty(_classNames2, styles.plainThemeInherit, theme === 'inherit'), _classNames2)),
    'aria-label': accessibilityLabel,
    'data-test': dataTest,
    ref: ref
  };

  if (to) {
    return React.createElement("a", _extends({}, commonProps, getAnchorProps({
      isDisabled: isDisabled,
      shouldOpenInNewTab: shouldOpenInNewTab,
      to: to,
      onClick: onClick
    }), {
      ref: ref
    }));
  }

  return React.createElement("button", _extends({}, commonProps, getButtonProps({
    onClick: onClick,
    type: type,
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onFocus: onFocus,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur
  }), {
    ref: ref
  }));
});

export default Plain;
//# sourceMappingURL=plain.js.map
