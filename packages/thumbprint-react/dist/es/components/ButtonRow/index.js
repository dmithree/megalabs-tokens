import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

function ButtonRow(_ref) {
  var _classNames;

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'left' : _ref$justify,
      dataTest = _ref.dataTest,
      _ref$isStackedBelowSm = _ref.isStackedBelowSmall,
      isStackedBelowSmall = _ref$isStackedBelowSm === void 0 ? false : _ref$isStackedBelowSm;
  return React.createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.stackBelowSmall, isStackedBelowSmall), _defineProperty(_classNames, styles.justifyCenter, justify === 'center'), _defineProperty(_classNames, styles.justifyLeft, justify === 'left'), _defineProperty(_classNames, styles.justifyRight, justify === 'right'), _classNames)),
    "data-test": dataTest
  }, React.Children.map(children, function (child) {
    return React.createElement("div", {
      className: styles.item
    }, child);
  }));
}

export default ButtonRow;
//# sourceMappingURL=index.js.map
