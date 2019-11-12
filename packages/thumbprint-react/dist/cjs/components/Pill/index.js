'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var styles = _interopDefault(require('./index.module.scss'));

function Pill(_ref) {
  var _classNames;

  var color = _ref.color,
      icon = _ref.icon,
      children = _ref.children;
  return React__default.createElement("div", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillGreen, color === 'green'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillRed, color === 'red'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillIndigo, color === 'indigo'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillBlue, color === 'blue'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillYellow, color === 'yellow'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.pillPurple, color === 'purple'), _classNames))
  }, React__default.createElement("div", {
    className: styles.content
  }, icon && React__default.createElement("span", {
    className: styles.iconWrap
  }, icon), React__default.createElement("span", null, children)));
}
Pill.propTypes = {
  /**
   * Text content to render.
   */
  children: PropTypes.string.isRequired,

  /**
   * "Tiny" size icon to render.
   */
  icon: PropTypes.node,

  /**
   * Color of the pill text and background.
   */
  color: PropTypes.oneOf(['green', 'red', 'indigo', 'blue', 'yellow', 'purple'])
};
Pill.defaultProps = {
  icon: undefined,
  color: undefined
};

exports.default = Pill;
//# sourceMappingURL=index.js.map
