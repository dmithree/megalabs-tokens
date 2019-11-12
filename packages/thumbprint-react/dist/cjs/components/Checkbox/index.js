'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var tokens = require('@thumbtack/thumbprint-tokens');
var warning = _interopDefault(require('warning'));
var contentActionsCheckSmall = require('../../icons/content-actions-check-small.js');
require('../../icons/navigation-caret-down-small.js');
require('../../icons/navigation-close-tiny.js');
require('../../icons/navigation-close-small.js');
require('../../icons/navigation-close-medium.js');
require('../../icons/alert-check.js');
require('../../icons/alert-info.js');
require('../../icons/alert-warning.js');
var styles = _interopDefault(require('./index.module.scss'));

var labelCursor = {
  error: 'pointer',
  disabled: 'default',
  default: 'pointer'
};
var color = {
  error: {
    unchecked: tokens.tpColorRed,
    checked: tokens.tpColorRed,
    indeterminate: tokens.tpColorRed
  },
  disabled: {
    unchecked: tokens.tpColorGray,
    checked: tokens.tpColorGray,
    indeterminate: tokens.tpColorGray
  },
  default: {
    unchecked: 'inherit',
    checked: tokens.tpColorWhite,
    indeterminate: tokens.tpColorWhite
  }
};
var borderColor = {
  error: {
    unchecked: tokens.tpColorRed,
    checked: tokens.tpColorRed,
    indeterminate: tokens.tpColorRed
  },
  disabled: {
    unchecked: tokens.tpColorGray300,
    checked: tokens.tpColorGray300,
    indeterminate: tokens.tpColorGray300
  },
  default: {
    unchecked: tokens.tpColorGray,
    checked: tokens.tpColorBlue,
    indeterminate: tokens.tpColorBlue
  }
};
var backgroundColor = {
  error: {
    unchecked: tokens.tpColorWhite,
    checked: tokens.tpColorWhite,
    indeterminate: tokens.tpColorWhite
  },
  disabled: {
    unchecked: tokens.tpColorGray200,
    checked: tokens.tpColorGray200,
    indeterminate: tokens.tpColorGray200
  },
  default: {
    unchecked: tokens.tpColorWhite,
    checked: tokens.tpColorBlue,
    indeterminate: tokens.tpColorBlue
  }
};
var textColor = {
  error: tokens.tpColorRed,
  disabled: tokens.tpColorGray,
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
    React__default.createElement("label", {
      className: classNames(styles.root, (_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootCheckboxVerticalAlignTop, checkboxVerticalAlign === 'top'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootCheckboxVerticalAlignCenter, checkboxVerticalAlign === 'center'), _classNames)),
      style: {
        cursor: labelCursor[functionalState],
        padding: labelPadding
      }
    }, React__default.createElement("input", {
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
    }), React__default.createElement("div", {
      className: styles.checkboxImage,
      style: {
        color: color[functionalState][checkedState],
        backgroundColor: backgroundColor[functionalState][checkedState],
        borderColor: borderColor[functionalState][checkedState]
      }
    }, isChecked && !isIndeterminate && React__default.createElement(contentActionsCheckSmall.default, null), isIndeterminate && React__default.createElement("svg", {
      width: "10",
      height: "2",
      viewBox: "0 0 10 2",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, React__default.createElement("rect", {
      x: "0",
      y: "0",
      width: "10",
      height: "2"
    }))), children && React__default.createElement("span", {
      style: {
        color: textColor[functionalState]
      },
      className: styles.text
    }, children))
  );
}

exports.default = Checkbox;
//# sourceMappingURL=index.js.map
