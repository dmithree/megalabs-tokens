'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var styles = _interopDefault(require('./index.module.scss'));

var propTypes = {
  /**
   * Renders the horizontal rule with the thumbtack styles.
   */
  lineStyle: PropTypes.oneOf(['solid', 'dotted', 'dashed']),
  color: PropTypes.oneOf(['gray', 'gray-300'])
};
var defaultProps = {
  lineStyle: 'solid',
  color: 'gray'
};
function HorizontalRule(_ref) {
  var _classNames;

  var lineStyle = _ref.lineStyle,
      color = _ref.color;
  return React__default.createElement("hr", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.gray300, color === 'gray-300'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dashed, lineStyle === 'dashed'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.dotted, lineStyle === 'dotted'), _classNames))
  });
}
HorizontalRule.propTypes = propTypes;
HorizontalRule.defaultProps = defaultProps;

exports.default = HorizontalRule;
//# sourceMappingURL=index.js.map
