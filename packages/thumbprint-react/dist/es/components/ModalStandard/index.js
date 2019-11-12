import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import '../../icons/navigation-close-tiny.js';
import '../../icons/navigation-close-small.js';
import NavigationCloseMedium from '../../icons/navigation-close-medium.js';
import '../../icons/alert-check.js';
import '../../icons/alert-info.js';
import '../../icons/alert-warning.js';
import ModalBase from '../ModalBase/index.js';
import styles from './index.module.scss';

var ModalStandard = function ModalStandard(_ref) {
  var _classnames, _classnames2;

  var children = _ref.children,
      isOpen = _ref.isOpen,
      onCloseClick = _ref.onCloseClick,
      onCloseFinish = _ref.onCloseFinish,
      onOpenFinish = _ref.onOpenFinish,
      shouldCloseOnBackdropClick = _ref.shouldCloseOnBackdropClick,
      shouldHideCloseButton = _ref.shouldHideCloseButton,
      theme = _ref.theme;
  return React.createElement(ModalBase, {
    isOpen: isOpen,
    onCloseClick: onCloseClick,
    contentsMaxWidth: "600px",
    shouldCloseOnBackdropClick: shouldCloseOnBackdropClick,
    onOpenFinish: onOpenFinish,
    onCloseFinish: onCloseFinish
  }, React.createElement("div", {
    className: classNames((_classnames = {}, _defineProperty(_classnames, styles.contents, true), _defineProperty(_classnames, styles.contentsBrand, theme === 'brand'), _classnames))
  }, children, shouldHideCloseButton === false && React.createElement("button", {
    onClick: onCloseClick,
    className: styles.closeButton,
    type: "button"
  }, React.createElement(NavigationCloseMedium, {
    className: classNames((_classnames2 = {}, _defineProperty(_classnames2, styles.closeIcon, true), _defineProperty(_classnames2, styles.closeIconBrand, theme === 'brand'), _classnames2))
  }))));
};

ModalStandard.propTypes = {
  /**
   * Content that appears above the Backdrop.
   */
  children: PropTypes.node,

  /**
   * Function that fires to close the modal.
   */
  onCloseClick: PropTypes.func.isRequired,

  /**
   * Function that fires once the modal has opened and transitions have ended.
   */
  onOpenFinish: PropTypes.func,

  /**
   * Function that fires once the modal has closed and transitions have ended.
   */
  onCloseFinish: PropTypes.func,

  /**
   * Determines if the modal should close when clicking on the Backdrop,
   * outside of the `children`.
   */
  shouldCloseOnBackdropClick: PropTypes.bool,

  /**
   * Determines if the close button should be rendered. This is generally discouraged and should
   * be used carefully. If used, the contents passed into the modal must contain a focusable
   * element such as a link or button.
   */
  shouldHideCloseButton: PropTypes.bool,

  /**
   * Should the Backdrop appear open.
   */
  isOpen: PropTypes.bool,

  /**
   * Sets the color of the background and close button.
   */
  theme: PropTypes.oneOf(['brand', 'faint'])
};
ModalStandard.defaultProps = {
  children: undefined,
  onOpenFinish: undefined,
  onCloseFinish: undefined,
  isOpen: false,
  theme: 'faint',
  shouldCloseOnBackdropClick: true,
  shouldHideCloseButton: false
};

export default ModalStandard;
//# sourceMappingURL=index.js.map
