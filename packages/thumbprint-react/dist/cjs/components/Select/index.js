'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var tokens = require('@thumbtack/thumbprint-tokens');
require('../../icons/content-actions-check-small.js');
var navigationCaretDownSmall = require('../../icons/navigation-caret-down-small.js');
require('../../icons/navigation-close-tiny.js');
require('../../icons/navigation-close-small.js');
require('../../icons/navigation-close-medium.js');
require('../../icons/alert-check.js');
require('../../icons/alert-info.js');
require('../../icons/alert-warning.js');
var styles = _interopDefault(require('./index.module.scss'));

var iconColor = {
  disabled: tokens.tpColorGray,
  default: tokens.tpColorBlack,
  error: tokens.tpColorRed
};

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

function Select(_ref2) {
  var _classNames, _classNames2;

  var children = _ref2.children,
      dataTest = _ref2.dataTest,
      _ref2$hasError = _ref2.hasError,
      hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
      id = _ref2.id,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$isFullWidth = _ref2.isFullWidth,
      isFullWidth = _ref2$isFullWidth === void 0 ? false : _ref2$isFullWidth,
      _ref2$isRequired = _ref2.isRequired,
      isRequired = _ref2$isRequired === void 0 ? false : _ref2$isRequired,
      name = _ref2.name,
      _onChange = _ref2.onChange,
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      _ref2$onClick = _ref2.onClick,
      onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'large' : _ref2$size,
      value = _ref2.value;
  var uiState = getUIState({
    isDisabled: isDisabled,
    hasError: hasError
  });
  return React__default.createElement("div", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootWidthFull, isFullWidth), _classNames))
  }, React__default.createElement("select", {
    className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.select, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.selectStateDisabled, uiState === 'disabled'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.selectStateError, uiState === 'error'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.selectStateDefault, uiState === 'default'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.selectSizeSmall, size === 'small'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.selectSizeLarge, size === 'large'), _classNames2)),
    id: id,
    disabled: isDisabled,
    required: isRequired,
    value: value,
    onClick: onClick,
    onChange: function onChange(event) {
      return _onChange(event.target.value, event);
    },
    onFocus: onFocus,
    onBlur: onBlur,
    "data-test": dataTest,
    name: name
  }, children), React__default.createElement(navigationCaretDownSmall.default, {
    className: styles.caret,
    fill: iconColor[uiState]
  }));
}

exports.default = Select;
//# sourceMappingURL=index.js.map
