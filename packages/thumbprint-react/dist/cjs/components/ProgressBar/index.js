'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var index = require('../ProgressBarBase/index.js');
var styles = _interopDefault(require('./index.module.scss'));

var ProgressBar = function ProgressBar(_ref) {
  var _classnames;

  var value = _ref.value,
      shouldShowLabel = _ref.shouldShowLabel,
      labelAlign = _ref.labelAlign;
  return React__default.createElement("div", null, React__default.createElement(index.default, {
    width: value
  }), shouldShowLabel && React__default.createElement("div", {
    className: classNames((_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, styles.label, true), _rollupPluginBabelHelpers.defineProperty(_classnames, styles.labelCenter, labelAlign === 'center'), _classnames))
  }, value, "% complete"));
};

ProgressBar.propTypes = {
  /**
   * A number between 0 and 100 that indicates the progress made.
   */
  value: PropTypes.number,
  labelAlign: PropTypes.oneOf(['left', 'center']),
  shouldShowLabel: PropTypes.bool
};
ProgressBar.defaultProps = {
  value: 0,
  labelAlign: 'left',
  shouldShowLabel: true
};

exports.default = ProgressBar;
//# sourceMappingURL=index.js.map
