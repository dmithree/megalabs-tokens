import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import { tpColorGray300, tpColorBlue, tpColorGray, tpColorRed, tpColorGray200, tpColorWhite } from '@thumbtack/thumbprint-tokens';
import warning from 'warning';
import styles from './index.module.scss';

var borderColor = {
  disabled: tpColorGray300,
  checked: tpColorBlue,
  unchecked: tpColorGray,
  error: tpColorRed
};
var labelCursor = {
  disabled: 'default',
  checked: 'pointer',
  unchecked: 'pointer',
  error: 'pointer'
};
var backgroundColor = {
  disabled: tpColorGray200,
  checked: tpColorWhite,
  unchecked: tpColorWhite,
  error: tpColorWhite
};
/**
 * Color of the inner circle when the radio is checked.
 */

var circleColor = {
  disabled: tpColorGray,
  checked: tpColorBlue,
  unchecked: undefined,
  error: tpColorRed
};
var textColor = {
  disabled: tpColorGray,
  checked: 'inherit',
  unchecked: 'inherit',
  error: tpColorRed
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
    React.createElement("label", {
      className: classNames(styles.root, (_classNames = {}, _defineProperty(_classNames, styles.rootRadioVerticalAlignTop, radioVerticalAlign === 'top'), _defineProperty(_classNames, styles.rootRadioVerticalAlignCenter, radioVerticalAlign === 'center'), _classNames)),
      style: {
        padding: labelPadding,
        cursor: labelCursor[uiState]
      }
    }, React.createElement("input", {
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
    }), React.createElement("svg", {
      className: styles.radioImage,
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("g", {
      fill: backgroundColor[uiState],
      fillRule: "evenodd"
    }, React.createElement("circle", {
      stroke: borderColor[uiState],
      strokeWidth: "2",
      cx: "10",
      cy: "10",
      r: "9"
    }), isChecked && React.createElement("circle", {
      fill: circleColor[uiState],
      cx: "10",
      cy: "10",
      r: "6"
    }))), children && React.createElement("span", {
      className: styles.text,
      style: {
        color: textColor[uiState]
      }
    }, children))
  );
}

export default Radio;
//# sourceMappingURL=index.js.map
