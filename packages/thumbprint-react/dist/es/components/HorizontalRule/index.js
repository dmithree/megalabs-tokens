import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

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
  return React.createElement("hr", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.gray300, color === 'gray-300'), _defineProperty(_classNames, styles.dashed, lineStyle === 'dashed'), _defineProperty(_classNames, styles.dotted, lineStyle === 'dotted'), _classNames))
  });
}
HorizontalRule.propTypes = propTypes;
HorizontalRule.defaultProps = defaultProps;

export default HorizontalRule;
//# sourceMappingURL=index.js.map
