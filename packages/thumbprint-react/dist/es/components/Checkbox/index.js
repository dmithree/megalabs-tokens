import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import { tpColorRed, tpColorGray, tpColorWhite, tpColorGray300, tpColorBlue, tpColorGray200 } from '@thumbtack/thumbprint-tokens';
import warning from 'warning';
import ContentActionsCheckSmall from '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import '../../icons/navigation-close-tiny.js';
import '../../icons/navigation-close-small.js';
import '../../icons/navigation-close-medium.js';
import '../../icons/alert-check.js';
import '../../icons/alert-info.js';
import '../../icons/alert-warning.js';
import styles from './index.module.scss';

var labelCursor = {
  error: 'pointer',
  disabled: 'default',
  default: 'pointer'
};
var color = {
  error: {
    unchecked: tpColorRed,
    checked: tpColorRed,
    indeterminate: tpColorRed
  },
  disabled: {
    unchecked: tpColorGray,
    checked: tpColorGray,
    indeterminate: tpColorGray
  },
  default: {
    unchecked: 'inherit',
    checked: tpColorWhite,
    indeterminate: tpColorWhite
  }
};
var borderColor = {
  error: {
    unchecked: tpColorRed,
    checked: tpColorRed,
    indeterminate: tpColorRed
  },
  disabled: {
    unchecked: tpColorGray300,
    checked: tpColorGray300,
    indeterminate: tpColorGray300
  },
  default: {
    unchecked: tpColorGray,
    checked: tpColorBlue,
    indeterminate: tpColorBlue
  }
};
var backgroundColor = {
  error: {
    unchecked: tpColorWhite,
    checked: tpColorWhite,
    indeterminate: tpColorWhite
  },
  disabled: {
    unchecked: tpColorGray200,
    checked: tpColorGray200,
    indeterminate: tpColorGray200
  },
  default: {
    unchecked: tpColorWhite,
    checked: tpColorBlue,
    indeterminate: tpColorBlue
  }
};
var textColor = {
  error: tpColorRed,
  disabled: tpColorGray,
  default: 'inherit'
};

var getCheckedState = function getCheckedState(_ref) {
  var isChecked = _ref.isChecked,
      isIndeterminate = _ref.isIndeterminate;

  if (isChecked) {
    return 'checked';
  }

  if (isIndeterminate) {
    return 'indeterminate';
  }

  return 'unchecked';
};

var getFunctionalState = function getFunctionalState(_ref2) {
  var isDisabled = _ref2.isDisabled,
      hasError = _ref2.hasError;

  if (isDisabled) {
    return 'disabled';
  }

  if (hasError) {
    return 'error';
  }

  return 'default';
};

function Checkbox(_ref3) {
  var _classNames;

  var _ref3$checkboxVertica = _ref3.checkboxVerticalAlign,
      checkboxVerticalAlign = _ref3$checkboxVertica === void 0 ? 'center' : _ref3$checkboxVertica,
      children = _ref3.children,
      dataTest = _ref3.dataTest,
      _ref3$hasError = _ref3.hasError,
      hasError = _ref3$hasError === void 0 ? false : _ref3$hasError,
      id = _ref3.id,
      _ref3$isChecked = _ref3.isChecked,
      isChecked = _ref3$isChecked === void 0 ? false : _ref3$isChecked,
      _ref3$isDisabled = _ref3.isDisabled,
      isDisabled = _ref3$isDisabled === void 0 ? false : _ref3$isDisabled,
      _ref3$isIndeterminate = _ref3.isIndeterminate,
      isIndeterminate = _ref3$isIndeterminate === void 0 ? false : _ref3$isIndeterminate,
      _ref3$labelPadding = _ref3.labelPadding,
      labelPadding = _ref3$labelPadding === void 0 ? '14px 0' : _ref3$labelPadding,
      _ref3$isRequired = _ref3.isRequired,
      isRequired = _ref3$isRequired === void 0 ? false : _ref3$isRequired,
      name = _ref3.name,
      _onChange = _ref3.onChange,
      value = _ref3.value;
  var functionalState = getFunctionalState({
    isDisabled: isDisabled,
    hasError: hasError
  });
  var checkedState = getCheckedState({
    isChecked: isChecked,
    isIndeterminate: isIndeterminate
  });
  warning(children || id, 'If `children` is not provided to `Checkbox`, the `id` prop must be used to link the `Checkbox` to a `label` element.');
  return (// eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    React.createElement("label", {
      className: classNames(styles.root, (_classNames = {}, _defineProperty(_classNames, styles.rootCheckboxVerticalAlignTop, checkboxVerticalAlign === 'top'), _defineProperty(_classNames, styles.rootCheckboxVerticalAlignCenter, checkboxVerticalAlign === 'center'), _classNames)),
      style: {
        cursor: labelCursor[functionalState],
        padding: labelPadding
      }
    }, React.createElement("input", {
      className: styles.input,
      "aria-checked": isIndeterminate ? 'mixed' : isChecked,
      "data-test": dataTest,
      type: "checkbox",
      id: id,
      name: name,
      checked: isChecked,
      onChange: function onChange(event) {
        return _onChange(event.target.checked, id);
      },
      disabled: isDisabled,
      required: isRequired,
      value: value
    }), React.createElement("div", {
      className: styles.checkboxImage,
      style: {
        color: color[functionalState][checkedState],
        backgroundColor: backgroundColor[functionalState][checkedState],
        borderColor: borderColor[functionalState][checkedState]
      }
    }, isChecked && !isIndeterminate && React.createElement(ContentActionsCheckSmall, null), isIndeterminate && React.createElement("svg", {
      width: "10",
      height: "2",
      viewBox: "0 0 10 2",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("rect", {
      x: "0",
      y: "0",
      width: "10",
      height: "2"
    }))), children && React.createElement("span", {
      style: {
        color: textColor[functionalState]
      },
      className: styles.text
    }, children))
  );
}

export default Checkbox;
//# sourceMappingURL=index.js.map
