'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

function ButtonRow(_ref) {
  var _classNames;

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? 'left' : _ref$justify,
      dataTest = _ref.dataTest,
      _ref$isStackedBelowSm = _ref.isStackedBelowSmall,
      isStackedBelowSmall = _ref$isStackedBelowSm === void 0 ? false : _ref$isStackedBelowSm;
  return React__default.createElement("div", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.stackBelowSmall, isStackedBelowSmall), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.justifyCenter, justify === 'center'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.justifyLeft, justify === 'left'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.justifyRight, justify === 'right'), _classNames)),
    "data-test": dataTest
  }, React__default.Children.map(children, function (child) {
    return React__default.createElement("div", {
      className: styles.item
    }, child);
  }));
}

exports.default = ButtonRow;
//# sourceMappingURL=index.js.map
