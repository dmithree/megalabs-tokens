import { slicedToArray as _slicedToArray, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import classNames from 'classnames';
import { InputRowContext } from '../InputRow/index.js';
import '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import '../../icons/navigation-close-tiny.js';
import NavigationCloseSmall from '../../icons/navigation-close-small.js';
import '../../icons/navigation-close-medium.js';
import '../../icons/alert-check.js';
import '../../icons/alert-info.js';
import '../../icons/alert-warning.js';
import styles from './index.module.scss';

var Context = React.createContext({
  hasValue: false,
  size: undefined,
  position: 'left'
});
/**
 * Prioritize the mutually exclusive UI states the user may end up in.
 */

var getUIState = function getUIState(_ref) {
  var isDisabled = _ref.isDisabled,
      isReadOnly = _ref.isReadOnly,
      hasError = _ref.hasError;

  if (isDisabled) {
    return 'disabled';
  }

  if (isReadOnly) {
    return 'readonly';
  }

  if (hasError) {
    return 'error';
  }

  return 'default';
};

/**
 * This component is not exported. It wraps the `InputClearButton` and `InputIcon`, applying
 * classes to position the icon. It does this by using `create-react-context`, a ponyfill for
 * React’s context functionality. This makes it easier for consumers to use `InputClearButton` and
 * `InputIcon` because they won’t have to specify as many props.
 * @private
 */
var InputIconContainer = function InputIconContainer(_ref2) {
  var children = _ref2.children,
      style = _ref2.style;
  return React.createElement(Context.Consumer, null, function (theme) {
    var _classNames;

    var position = theme && theme.position;
    var size = theme && theme.size;
    return React.createElement("div", {
      className: classNames((_classNames = {}, _defineProperty(_classNames, styles.inputIconContainer, true), _defineProperty(_classNames, styles.inputIconContainerPositionLeft, position === 'left'), _defineProperty(_classNames, styles.inputIconContainerPositionLeftSizeSmall, position === 'left' && size === 'small'), _defineProperty(_classNames, styles.inputIconContainerPositionLeftSizeLarge, position === 'left' && size === 'large'), _defineProperty(_classNames, styles.inputIconContainerPositionRight, position === 'right'), _defineProperty(_classNames, styles.inputIconContainerPositionRightSizeSmall, position === 'right' && size === 'small'), _defineProperty(_classNames, styles.inputIconContainerPositionRightSizeLarge, position === 'right' && size === 'large'), _classNames)),
      style: style
    }, children);
  });
};

/**
 * Accessible button that makes it easy to add a "Clear" button to a text input. It should be used
 * with the `innerRight` prop in `Input`.
 */
var InputClearButton = function InputClearButton(_ref3) {
  var onClick = _ref3.onClick;
  return React.createElement(InputIconContainer, null, React.createElement(Context.Consumer, null, function (theme) {
    return React.createElement("div", {
      className: classNames({
        displayNone: theme && !theme.hasValue
      })
    }, React.createElement("button", {
      className: styles.unstyledButton,
      "aria-label": "Clear input",
      onClick: onClick,
      type: "button"
    }, React.createElement(NavigationCloseSmall, null)));
  }));
};

/**
 * Component that helps position icons within inputs.
 */
var InputIcon = function InputIcon(_ref4) {
  var _ref4$color = _ref4.color,
      color = _ref4$color === void 0 ? 'inherit' : _ref4$color,
      children = _ref4.children;
  return React.createElement(InputIconContainer, {
    style: {
      color: color
    }
  }, children);
};

var Input = React.forwardRef(function (_ref5, outerRef) {
  var _classNames2, _classNames3;

  var id = _ref5.id,
      _ref5$type = _ref5.type,
      type = _ref5$type === void 0 ? 'text' : _ref5$type,
      _ref5$isDisabled = _ref5.isDisabled,
      isDisabled = _ref5$isDisabled === void 0 ? false : _ref5$isDisabled,
      _ref5$isReadOnly = _ref5.isReadOnly,
      isReadOnly = _ref5$isReadOnly === void 0 ? false : _ref5$isReadOnly,
      _ref5$isRequired = _ref5.isRequired,
      isRequired = _ref5$isRequired === void 0 ? false : _ref5$isRequired,
      _ref5$hasError = _ref5.hasError,
      hasError = _ref5$hasError === void 0 ? false : _ref5$hasError,
      placeholder = _ref5.placeholder,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 'large' : _ref5$size,
      name = _ref5.name,
      _ref5$value = _ref5.value,
      value = _ref5$value === void 0 ? '' : _ref5$value,
      innerLeft = _ref5.innerLeft,
      innerRight = _ref5.innerRight,
      _ref5$onClick = _ref5.onClick,
      _onClick = _ref5$onClick === void 0 ? function () {} : _ref5$onClick,
      _ref5$onChange = _ref5.onChange,
      _onChange = _ref5$onChange === void 0 ? function () {} : _ref5$onChange,
      _ref5$onFocus = _ref5.onFocus,
      _onFocus = _ref5$onFocus === void 0 ? function () {} : _ref5$onFocus,
      _ref5$onBlur = _ref5.onBlur,
      _onBlur = _ref5$onBlur === void 0 ? function () {} : _ref5$onBlur,
      _ref5$onKeyDown = _ref5.onKeyDown,
      _onKeyDown = _ref5$onKeyDown === void 0 ? function () {} : _ref5$onKeyDown,
      _ref5$onKeyUp = _ref5.onKeyUp,
      _onKeyUp = _ref5$onKeyUp === void 0 ? function () {} : _ref5$onKeyUp,
      _ref5$onKeyPress = _ref5.onKeyPress,
      _onKeyPress = _ref5$onKeyPress === void 0 ? function () {} : _ref5$onKeyPress,
      _ref5$shouldFocusOnPa = _ref5.shouldFocusOnPageLoad,
      shouldFocusOnPageLoad = _ref5$shouldFocusOnPa === void 0 ? false : _ref5$shouldFocusOnPa,
      dataTest = _ref5.dataTest,
      inputMode = _ref5.inputMode,
      pattern = _ref5.pattern,
      maxLength = _ref5.maxLength,
      autoComplete = _ref5.autoComplete;

  var uiState = getUIState({
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    hasError: hasError
  }); // The input element rendered by this component. We use `useState` instead of
  // `useRef` because callback refs allow us to add more than one `ref` to a DOM node.

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      inputEl = _useState2[0],
      setInputEl = _useState2[1];

  var focusInput = function focusInput() {
    if (inputEl) {
      inputEl.focus();
    }
  };
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */


  return React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.root, true), _defineProperty(_classNames2, styles.rootUiStateDefault, uiState === 'default'), _defineProperty(_classNames2, styles.rootUiStateReadonly, uiState === 'readonly'), _defineProperty(_classNames2, styles.rootUiStateDisabled, uiState === 'disabled'), _defineProperty(_classNames2, styles.rootUiStateError, uiState === 'error'), _classNames2))
  }, innerLeft && React.createElement(Context.Provider, {
    value: {
      hasValue: !!value,
      size: size,
      position: 'left'
    }
  }, React.createElement("div", {
    className: styles.inputInnerElement,
    onClick: focusInput
  }, innerLeft)), React.createElement("input", {
    className: classNames((_classNames3 = {}, _defineProperty(_classNames3, styles.input, true), _defineProperty(_classNames3, styles.inputError, uiState === 'error'), _defineProperty(_classNames3, styles.inputSizeSmall, size === 'small'), _defineProperty(_classNames3, styles.inputSizeLarge, size === 'large'), _defineProperty(_classNames3, styles.inputInnerLeft, innerLeft), _defineProperty(_classNames3, styles.inputInnerRight, innerRight), _classNames3)),
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    placeholder: placeholder // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
    autoFocus: shouldFocusOnPageLoad,
    name: name,
    type: type,
    value: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value, e);
    },
    onClick: function onClick(e) {
      return _onClick(e);
    },
    onFocus: function onFocus(e) {
      return _onFocus(e);
    },
    onBlur: function onBlur(e) {
      return _onBlur(e);
    },
    onKeyDown: function onKeyDown(e) {
      return _onKeyDown(e);
    },
    onKeyUp: function onKeyUp(e) {
      return _onKeyUp(e);
    },
    onKeyPress: function onKeyPress(e) {
      return _onKeyPress(e);
    },
    id: id,
    ref: function ref(el) {
      setInputEl(el); // `outerRef` is the potential forwarded `ref` passed in from a consumer.
      // Not all refs are callable functions, so only try and call it if it is.

      if (typeof outerRef === 'function') {
        outerRef(el);
      }
    },
    "data-test": dataTest,
    inputMode: inputMode,
    pattern: pattern,
    maxLength: maxLength,
    autoComplete: autoComplete
  }), innerRight && React.createElement(Context.Provider, {
    value: {
      hasValue: !!value,
      size: size,
      position: 'right'
    }
  }, React.createElement("div", {
    className: styles.inputInnerElement,
    onClick: focusInput
  }, innerRight)), React.createElement(InputRowContext.Consumer, null, function (_ref6) {
    var _classNames4;

    var isWithinInputRow = _ref6.isWithinInputRow,
        isFirstInputRowChild = _ref6.isFirstInputRowChild,
        isLastInputRowChild = _ref6.isLastInputRowChild;
    return React.createElement("div", {
      className: classNames((_classNames4 = {}, _defineProperty(_classNames4, styles.inputStyles, true), _defineProperty(_classNames4, styles.inputStylesRoundedBordersLeft, isFirstInputRowChild || !isWithinInputRow), _defineProperty(_classNames4, styles.inputStylesRoundedBordersRight, isLastInputRowChild || !isWithinInputRow), _defineProperty(_classNames4, styles.inputStylesHasNoRightBorder, isWithinInputRow && !isLastInputRowChild), _defineProperty(_classNames4, styles.inputStylesUiStateDefault, uiState === 'default'), _defineProperty(_classNames4, styles.inputStylesUiStateReadonly, uiState === 'readonly'), _defineProperty(_classNames4, styles.inputStylesUiStateDisabled, uiState === 'disabled'), _defineProperty(_classNames4, styles.inputStylesUiStateError, uiState === 'error'), _classNames4))
    });
  }));
});
Input.displayName = 'Input';

export default Input;
export { InputClearButton, InputIcon };
//# sourceMappingURL=index.js.map
