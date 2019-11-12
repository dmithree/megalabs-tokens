import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

var ProgressBarBase = function ProgressBarBase(_ref) {
  var width = _ref.width;
  return React.createElement("div", {
    className: styles.outer
  }, React.createElement("div", {
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

export default ProgressBarBase;
//# sourceMappingURL=index.js.map
