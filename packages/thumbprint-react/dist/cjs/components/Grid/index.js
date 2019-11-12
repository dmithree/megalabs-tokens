'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var warning = _interopDefault(require('warning'));
var styles = _interopDefault(require('./index.module.scss'));

var _React$createContext = React__default.createContext({
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
  return React__default.createElement(Consumer, null, function (_ref2) {
    var _classNames;

    var gutter = _ref2.gutter,
        isWithinGrid = _ref2.isWithinGrid;
    warning(isWithinGrid, '`GridColumn` must be an immediate child of a `Grid`');
    return React__default.createElement("div", {
      className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.col, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.colWide, gutter === 'wide'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.colFlush, gutter === 'flush'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles["col".concat(base)], true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles["aboveSmallCol".concat(aboveSmall)], aboveSmall), _rollupPluginBabelHelpers.defineProperty(_classNames, styles["aboveMediumCol".concat(aboveMedium)], aboveMedium), _rollupPluginBabelHelpers.defineProperty(_classNames, styles["aboveLargeCol".concat(aboveLarge)], aboveLarge), _classNames)),
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
  return React__default.createElement("div", {
    className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.grid, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.gridWide, gutter === 'wide'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.gridFlush, gutter === 'flush'), _classNames2)),
    "data-test": dataTest
  }, React__default.createElement(Provider, {
    value: {
      gutter: gutter,
      isWithinGrid: true
    }
  }, children));
}

exports.Grid = Grid;
exports.GridColumn = GridColumn;
//# sourceMappingURL=index.js.map
