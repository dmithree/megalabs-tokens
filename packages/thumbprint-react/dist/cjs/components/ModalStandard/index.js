'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
require('../../icons/content-actions-check-small.js');
require('../../icons/navigation-caret-down-small.js');
require('../../icons/navigation-close-tiny.js');
require('../../icons/navigation-close-small.js');
var navigationCloseMedium = require('../../icons/navigation-close-medium.js');
require('../../icons/alert-check.js');
require('../../icons/alert-info.js');
require('../../icons/alert-warning.js');
var index = require('../ModalBase/index.js');
var styles = _interopDefault(require('./index.module.scss'));

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
  return React__default.createElement(index.default, {
    isOpen: isOpen,
    onCloseClick: onCloseClick,
    contentsMaxWidth: "600px",
    shouldCloseOnBackdropClick: shouldCloseOnBackdropClick,
    onOpenFinish: onOpenFinish,
    onCloseFinish: onCloseFinish
  }, React__default.createElement("div", {
    className: classNames((_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, styles.contents, true), _rollupPluginBabelHelpers.defineProperty(_classnames, styles.contentsBrand, theme === 'brand'), _classnames))
  }, children, shouldHideCloseButton === false && React__default.createElement("button", {
    onClick: onCloseClick,
    className: styles.closeButton,
    type: "button"
  }, React__default.createElement(navigationCloseMedium.default, {
    className: classNames((_classnames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classnames2, styles.closeIcon, true), _rollupPluginBabelHelpers.defineProperty(_classnames2, styles.closeIconBrand, theme === 'brand'), _classnames2))
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

exports.default = ModalStandard;
//# sourceMappingURL=index.js.map
