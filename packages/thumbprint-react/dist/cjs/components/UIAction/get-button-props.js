'use strict';

/**
 * Enable plain and themed `<button>` elements to share the same props.
 */
var getButtonProps = function getButtonProps(_ref) {
  var onClick = _ref.onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      onMouseEnter = _ref.onMouseEnter,
      onMouseOver = _ref.onMouseOver,
      onFocus = _ref.onFocus,
      onMouseLeave = _ref.onMouseLeave,
      onBlur = _ref.onBlur;
  return {
    onClick: onClick,
    type: type,
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onFocus: onFocus,
    onMouseLeave: onMouseLeave,
    onBlur: onBlur
  };
};

exports.default = getButtonProps;
//# sourceMappingURL=get-button-props.js.map
