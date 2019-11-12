import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import warning from 'warning';
import styles from './index.module.scss';

var _React$createContext = React.createContext({
  gutter: 'normal',
  isWithinGrid: false
}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

function GridColumn(_ref) {
  var children = _ref.children,
      _ref$base = _ref.base,
      base = _ref$base === void 0 ? 12 : _ref$base,
      aboveSmall = _ref.aboveSmall,
      aboveMedium = _ref.aboveMedium,
      aboveLarge = _ref.aboveLarge,
      dataTest = _ref.dataTest;
  return React.createElement(Consumer, null, function (_ref2) {
    var _classNames;

    var gutter = _ref2.gutter,
        isWithinGrid = _ref2.isWithinGrid;
    warning(isWithinGrid, '`GridColumn` must be an immediate child of a `Grid`');
    return React.createElement("div", {
      className: classNames((_classNames = {}, _defineProperty(_classNames, styles.col, true), _defineProperty(_classNames, styles.colWide, gutter === 'wide'), _defineProperty(_classNames, styles.colFlush, gutter === 'flush'), _defineProperty(_classNames, styles["col".concat(base)], true), _defineProperty(_classNames, styles["aboveSmallCol".concat(aboveSmall)], aboveSmall), _defineProperty(_classNames, styles["aboveMediumCol".concat(aboveMedium)], aboveMedium), _defineProperty(_classNames, styles["aboveLargeCol".concat(aboveLarge)], aboveLarge), _classNames)),
      "data-test": dataTest
    }, children);
  });
}
function Grid(_ref3) {
  var _classNames2;

  var children = _ref3.children,
      _ref3$gutter = _ref3.gutter,
      gutter = _ref3$gutter === void 0 ? 'normal' : _ref3$gutter,
      dataTest = _ref3.dataTest;
  return React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.grid, true), _defineProperty(_classNames2, styles.gridWide, gutter === 'wide'), _defineProperty(_classNames2, styles.gridFlush, gutter === 'flush'), _classNames2)),
    "data-test": dataTest
  }, React.createElement(Provider, {
    value: {
      gutter: gutter,
      isWithinGrid: true
    }
  }, children));
}

export { Grid, GridColumn };
//# sourceMappingURL=index.js.map
