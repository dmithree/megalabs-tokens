import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function Pill(_ref) {
  var _classNames;

  var color = _ref.color,
      icon = _ref.icon,
      children = _ref.children;
  return React.createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.pillGreen, color === 'green'), _defineProperty(_classNames, styles.pillRed, color === 'red'), _defineProperty(_classNames, styles.pillIndigo, color === 'indigo'), _defineProperty(_classNames, styles.pillBlue, color === 'blue'), _defineProperty(_classNames, styles.pillYellow, color === 'yellow'), _defineProperty(_classNames, styles.pillPurple, color === 'purple'), _classNames))
  }, React.createElement("div", {
    className: styles.content
  }, icon && React.createElement("span", {
    className: styles.iconWrap
  }, icon), React.createElement("span", null, children)));
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

export default Pill;
//# sourceMappingURL=index.js.map
