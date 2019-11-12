'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

var getUIState = function getUIState(_ref) {
  var isDisabled = _ref.isDisabled,
      hasError = _ref.hasError;

  if (isDisabled) {
    return 'disabled';
  }

  if (hasError) {
    return 'error';
  }

  return 'default';
};

function Label(_ref2) {
  var _classNames;

  var _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$hasError = _ref2.hasError,
      hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
      forProp = _ref2.for,
      dataTest = _ref2.dataTest,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children;
  var uiState = getUIState({
    isDisabled: isDisabled,
    hasError: hasError
  });
  return (// eslint-disable-next-line jsx-a11y/label-has-for
    React__default.createElement("label", {
      htmlFor: forProp,
      className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.text, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.textUiStateDisabled, uiState === 'disabled'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.textUiStateError, uiState === 'error'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.textUiStateDefault, uiState === 'default'), _classNames)),
      "data-test": dataTest
    }, children)
  );
}

exports.default = Label;
//# sourceMappingURL=index.js.map
