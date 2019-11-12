'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styles = _interopDefault(require('./index.module.scss'));

var ProgressBarBase = function ProgressBarBase(_ref) {
  var width = _ref.width;
  return React__default.createElement("div", {
    className: styles.outer
  }, React__default.createElement("div", {
    className: styles.inner,
    style: {
      transform: "translateX(-".concat(100 - width, "%)")
    },
    role: "progressbar",
    "aria-valuenow": width,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }));
};

ProgressBarBase.propTypes = {
  /**
   * A number between 0 and 100.
   */
  width: PropTypes.number
};
ProgressBarBase.defaultProps = {
  width: 0
};

exports.default = ProgressBarBase;
//# sourceMappingURL=index.js.map
