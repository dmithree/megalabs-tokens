'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var tokens = require('@thumbtack/thumbprint-tokens');
var warning = _interopDefault(require('warning'));
var styles = _interopDefault(require('./index.module.scss'));

var borderColor = {
  disabled: tokens.tpColorGray300,
  checked: tokens.tpColorBlue,
  unchecked: tokens.tpColorGray,
  error: tokens.tpColorRed
};
var labelCursor = {
  disabled: 'default',
  checked: 'pointer',
  unchecked: 'pointer',
  error: 'pointer'
};
var backgroundColor = {
  disabled: tokens.tpColorGray200,
  checked: tokens.tpColorWhite,
  unchecked: tokens.tpColorWhite,
  error: tokens.tpColorWhite
};
/**
 * Color of the inner circle when the radio is checked.
 */

var circleColor = {
  disabled: tokens.tpColorGray,
  checked: tokens.tpColorBlue,
  unchecked: undefined,
  error: tokens.tpColorRed
};
var textColor = {
  disabled: tokens.tpColorGray,
  checked: 'inherit',
  unchecked: 'inherit',
  error: tokens.tpColorRed
};

var getUIState = function getUIState(_ref) {
  var isChecked = _ref.isChecked,
      isDisabled = _ref.isDisabled,
      hasError = _ref.hasError;

  if (isDisabled) {
    return 'disabled';
  }

  if (hasError) {
    return 'error';
  }

  if (isChecked) {
    return 'checked';
  }

  return 'unchecked';
};

function Radio(_ref2) {
  var _classNames;

  var _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      dataTest = _ref2.dataTest,
      id = _ref2.id,
      _ref2$isChecked = _ref2.isChecked,
      isChecked = _ref2$isChecked === void 0 ? false : _ref2$isChecked,
      _ref2$isDisabled = _ref2.isDisabled,
      isDisabled = _ref2$isDisabled === void 0 ? false : _ref2$isDisabled,
      _ref2$isRequired = _ref2.isRequired,
      isRequired = _ref2$isRequired === void 0 ? false : _ref2$isRequired,
      _ref2$hasError = _ref2.hasError,
      hasError = _ref2$hasError === void 0 ? false : _ref2$hasError,
      _ref2$labelPadding = _ref2.labelPadding,
      labelPadding = _ref2$labelPadding === void 0 ? '14px 0' : _ref2$labelPadding,
      name = _ref2.name,
      _onChange = _ref2.onChange,
      _ref2$radioVerticalAl = _ref2.radioVerticalAlign,
      radioVerticalAlign = _ref2$radioVerticalAl === void 0 ? 'center' : _ref2$radioVerticalAl;
  var uiState = getUIState({
    isChecked: isChecked,
    isDisabled: isDisabled,
    hasError: hasError
  });
  warning(children || id, 'If `children` is not provided to `Radio`, the `id` prop must be used to link the `Radio` to a `label` element.');
  return (// eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    React__default.createElement("label", {
      className: classNames(styles.root, (_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootRadioVerticalAlignTop, radioVerticalAlign === 'top'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootRadioVerticalAlignCenter, radioVerticalAlign === 'center'), _classNames)),
      style: {
        padding: labelPadding,
        cursor: labelCursor[uiState]
      }
    }, React__default.createElement("input", {
      className: styles.input,
      type: "radio",
      id: id,
      onChange: function onChange(event) {
        return _onChange(event.target.checked, id);
      },
      checked: isChecked,
      name: name,
      disabled: isDisabled,
      "data-test": dataTest,
      required: isRequired
    }), React__default.createElement("svg", {
      className: styles.radioImage,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("g", {
      fill: backgroundColor[uiState],
      fillRule: "evenodd"
    }, React__default.createElement("circle", {
      stroke: borderColor[uiState],
      strokeWidth: "2",
      cx: "10",
      cy: "10",
      r: "9"
    }), isChecked && React__default.createElement("circle", {
      fill: circleColor[uiState],
      cx: "10",
      cy: "10",
      r: "6"
    }))), children && React__default.createElement("span", {
      className: styles.text,
      style: {
        color: textColor[uiState]
      }
    }, children))
  );
}

exports.default = Radio;
//# sourceMappingURL=index.js.map
