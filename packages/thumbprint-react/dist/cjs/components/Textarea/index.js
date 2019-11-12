'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var styles = _interopDefault(require('./index.module.scss'));

var getUIState = function getUIState(_ref) {
  var hasError = _ref.hasError,
      isDisabled = _ref.isDisabled;

  if (isDisabled) {
    return 'disabled';
  }

  if (hasError) {
    return 'error';
  }

  return 'default';
};

function Textarea(_ref2) {
  var _classNames;

  var dataTest = _ref2.dataTest,
      _ref2$hasError = _ref2.hasError,
      hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
      id = _ref2.id,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$isRequired = _ref2.isRequired,
      isRequired = _ref2$isRequired === void 0 ? false : _ref2$isRequired,
      maxLength = _ref2.maxLength,
      onBlur = _ref2.onBlur,
      _onChange = _ref2.onChange,
      onFocus = _ref2.onFocus,
      placeholder = _ref2.placeholder,
      value = _ref2.value,
      name = _ref2.name;
  var uiState = getUIState({
    hasError: hasError,
    isDisabled: isDisabled
  });
  return React__default.createElement("textarea", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootStateDisabled, uiState === 'disabled'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootStateError, uiState === 'error'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootStateDefault, uiState === 'default'), _classNames)),
    id: id,
    disabled: isDisabled,
    maxLength: maxLength,
    required: isRequired,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value, event);
    },
    onFocus: onFocus,
    onBlur: onBlur,
    "data-test": dataTest,
    name: name
  });
}

exports.default = Textarea;
//# sourceMappingURL=index.js.map
