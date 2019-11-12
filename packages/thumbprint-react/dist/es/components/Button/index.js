import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import Themed from '../UIAction/themed.js';
import Plain from '../UIAction/plain.js';

var getCommonProps = function getCommonProps(props) {
  return {
    onClick: props.onClick,
    isDisabled: props.isDisabled,
    type: props.type,
    children: props.children,
    onMouseEnter: props.onMouseEnter,
    onMouseOver: props.onMouseOver,
    onFocus: props.onFocus,
    onMouseLeave: props.onMouseLeave,
    onBlur: props.onBlur,
    accessibilityLabel: props.accessibilityLabel,
    dataTest: props.dataTest
  };
};

var TextButton = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseOver = _ref.onMouseOver,
      onFocus = _ref.onFocus,
      onMouseLeave = _ref.onMouseLeave,
      onBlur = _ref.onBlur,
      accessibilityLabel = _ref.accessibilityLabel,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      dataTest = _ref.dataTest;
  return React.createElement(Plain, _extends({}, getCommonProps({
    onClick: onClick,
    isDisabled: isDisabled,
    type: type,
    children: children,
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onFocus: onFocus,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    accessibilityLabel: accessibilityLabel,
    dataTest: dataTest
  }), {
    theme: theme,
    iconLeft: iconLeft,
    iconRight: iconRight,
    ref: ref
  }));
});
var Button = React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$isLoading = _ref2.isLoading,
      isLoading = _ref2$isLoading === void 0 ? false : _ref2$isLoading,
      icon = _ref2.icon,
      accessibilityLabel = _ref2.accessibilityLabel,
      _ref2$type = _ref2.type,
      type = _ref2$type === void 0 ? 'button' : _ref2$type,
      onClick = _ref2.onClick,
      onMouseEnter = _ref2.onMouseEnter,
      onMouseOver = _ref2.onMouseOver,
      onFocus = _ref2.onFocus,
      onMouseLeave = _ref2.onMouseLeave,
      onBlur = _ref2.onBlur,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'primary' : _ref2$theme,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'large' : _ref2$size,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? 'auto' : _ref2$width,
      dataTest = _ref2.dataTest;
  return React.createElement(Themed, _extends({}, getCommonProps({
    onClick: onClick,
    isDisabled: isDisabled,
    type: type,
    children: children,
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onFocus: onFocus,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur,
    accessibilityLabel: accessibilityLabel,
    dataTest: dataTest
  }), {
    icon: icon,
    isLoading: isLoading,
    theme: theme,
    size: size,
    width: width,
    ref: ref
  }));
});

export default Button;
export { TextButton };
//# sourceMappingURL=index.js.map
