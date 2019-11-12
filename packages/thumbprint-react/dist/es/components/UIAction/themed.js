import { defineProperty as _defineProperty, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import warning from 'warning';
import 'prop-types';
import LoaderDots from '../LoaderDots/index.js';
import { InputRowContext } from '../InputRow/index.js';
import getAnchorProps from './get-anchor-props.js';
import getButtonProps from './get-button-props.js';
import styles from './themed.module.scss';

var loaderDotsTheme;

(function (loaderDotsTheme) {
  loaderDotsTheme["primary"] = "inverse";
  loaderDotsTheme["secondary"] = "brand";
  loaderDotsTheme["tertiary"] = "muted";
})(loaderDotsTheme || (loaderDotsTheme = {}));

var withIcon = function withIcon(children, _ref) {
  var _classNames;

  var icon = _ref.icon;

  if (!icon) {
    return children;
  }

  return React.createElement("span", {
    className: styles.flexCenter
  }, React.createElement("span", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.iconContainer, true), _defineProperty(_classNames, styles.iconContainerHasChildren, children), _classNames))
  }, icon), children);
};

var withLoader = function withLoader(children, _ref2) {
  var isLoading = _ref2.isLoading,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'primary' : _ref2$theme;

  if (!isLoading) {
    return children;
  }

  return React.createElement("span", {
    className: styles.loaderContainer
  }, React.createElement("span", {
    className: styles.absoluteCenter
  }, React.createElement(LoaderDots, {
    theme: loaderDotsTheme[theme],
    size: "small"
  })), React.createElement("span", {
    className: styles.hidden
  }, children));
};

var withFlexWrapper = function withFlexWrapper(children, _ref3) {
  var _classNames2;

  var size = _ref3.size;
  return React.createElement("span", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.flexWrapper, true), _defineProperty(_classNames2, styles.flexWrapperSizeSmall, size === 'small'), _defineProperty(_classNames2, styles.flexWrapperSizeLarge, size === 'large'), _classNames2))
  }, children);
};

var Themed = React.forwardRef(function (_ref4, ref) {
  var children = _ref4.children,
      _ref4$isDisabled = _ref4.isDisabled,
      isDisabled = _ref4$isDisabled === void 0 ? false : _ref4$isDisabled,
      _ref4$isLoading = _ref4.isLoading,
      isLoading = _ref4$isLoading === void 0 ? false : _ref4$isLoading,
      icon = _ref4.icon,
      _ref4$type = _ref4.type,
      type = _ref4$type === void 0 ? 'button' : _ref4$type,
      to = _ref4.to,
      _ref4$shouldOpenInNew = _ref4.shouldOpenInNewTab,
      shouldOpenInNewTab = _ref4$shouldOpenInNew === void 0 ? false : _ref4$shouldOpenInNew,
      onClick = _ref4.onClick,
      onMouseEnter = _ref4.onMouseEnter,
      onMouseOver = _ref4.onMouseOver,
      onFocus = _ref4.onFocus,
      onMouseLeave = _ref4.onMouseLeave,
      onBlur = _ref4.onBlur,
      accessibilityLabel = _ref4.accessibilityLabel,
      _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 'large' : _ref4$size,
      _ref4$theme = _ref4.theme,
      theme = _ref4$theme === void 0 ? 'primary' : _ref4$theme,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? 'auto' : _ref4$width,
      dataTest = _ref4.dataTest;
  warning(children || accessibilityLabel || icon && children, 'The prop `accessibilityLabel` must be provided to the button or link when `icon` is provided but `children` is not. This helps users on screen readers navigate our content.');
  return React.createElement(InputRowContext.Consumer, null, function (_ref5) {
    var _classNames3;

    var isWithinInputRow = _ref5.isWithinInputRow,
        isFirstInputRowChild = _ref5.isFirstInputRowChild,
        isLastInputRowChild = _ref5.isLastInputRowChild;
    var isAnchor = !!to;
    var anchorProps = getAnchorProps({
      isDisabled: isDisabled,
      shouldOpenInNewTab: shouldOpenInNewTab,
      to: to,
      onClick: onClick
    });
    var buttonProps = getButtonProps({
      onClick: onClick,
      type: type,
      onMouseEnter: onMouseEnter,
      onMouseOver: onMouseOver,
      onFocus: onFocus,
      onMouseLeave: onMouseLeave,
      onBlur: onBlur
    });
    var className = classNames((_classNames3 = {}, _defineProperty(_classNames3, styles.themedButton, true), _defineProperty(_classNames3, styles.themedButtonRoundedBordersLeft, isFirstInputRowChild || !isWithinInputRow), _defineProperty(_classNames3, styles.themedButtonRoundedBordersRight, isLastInputRowChild || !isWithinInputRow), _defineProperty(_classNames3, styles.themedButtonHasNoRightBorder, isWithinInputRow && !isLastInputRowChild), _defineProperty(_classNames3, styles.themedButtonThemePrimary, theme === 'primary'), _defineProperty(_classNames3, styles.themedButtonThemeTertiary, theme === 'tertiary'), _defineProperty(_classNames3, styles.themedButtonThemeSecondary, theme === 'secondary'), _defineProperty(_classNames3, styles.themedButtonThemeCaution, theme === 'caution'), _defineProperty(_classNames3, styles.themedButtonThemeSolid, theme === 'solid'), _defineProperty(_classNames3, styles.themedButtonThemePopoverPrimary, theme === 'popover-primary'), _defineProperty(_classNames3, styles.themedButtonThemePopoverSecondary, theme === 'popover-secondary'), _defineProperty(_classNames3, styles.themedButtonWidthAuto, width === 'auto' && !isWithinInputRow), _defineProperty(_classNames3, styles.themedButtonWidthFull, width === 'full' || isWithinInputRow), _defineProperty(_classNames3, styles.themedButtonWidthFullBelowSmall, width === 'full-below-small' && !isWithinInputRow), _classNames3));
    var commonProps = {
      disabled: isLoading || isDisabled,
      className: className,
      'aria-label': accessibilityLabel,
      'data-test': dataTest
    }; // There are more themes here than are valid for use with `LoaderDots`, so restrict the type
    // by overwriting any invalid themes as `undefined`.

    var restrictedTheme = theme === 'primary' || theme === 'secondary' || theme === 'tertiary' ? theme : undefined;
    var newChildren = withFlexWrapper(withLoader(withIcon(children, {
      icon: icon
    }), {
      isLoading: isLoading,
      theme: restrictedTheme
    }), {
      size: size
    });

    if (isAnchor) {
      return React.createElement("a", _extends({}, commonProps, anchorProps, {
        ref: ref
      }), newChildren);
    }

    return (// Disable this rule, even though `buttonProps.type` can never be undefined,
      // because the rule itself is broken and shows a false positive.
      // https://github.com/yannickcr/eslint-plugin-react/issues/1555
      // eslint-disable-next-line react/button-has-type
      React.createElement("button", _extends({}, commonProps, buttonProps, {
        ref: ref
      }), newChildren)
    );
  });
});

export default Themed;
//# sourceMappingURL=themed.js.map
