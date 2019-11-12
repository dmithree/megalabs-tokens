import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ProgressBarBase from '../ProgressBarBase/index.js';
import styles from './index.module.scss';

var ProgressBar = function ProgressBar(_ref) {
  var _classnames;

  var value = _ref.value,
      shouldShowLabel = _ref.shouldShowLabel,
      labelAlign = _ref.labelAlign;
  return React.createElement("div", null, React.createElement(ProgressBarBase, {
    width: value
  }), shouldShowLabel && React.createElement("div", {
    className: classNames((_classnames = {}, _defineProperty(_classnames, styles.label, true), _defineProperty(_classnames, styles.labelCenter, labelAlign === 'center'), _classnames))
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

export default ProgressBar;
//# sourceMappingURL=index.js.map
