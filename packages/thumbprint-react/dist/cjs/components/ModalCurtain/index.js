'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var noScroll = require('./components/no-scroll.js');
var useCloseOnEscape = require('../../utils/use-close-on-escape.js');
var useFocusTrap = require('../../utils/use-focus-trap.js');
var ConditionalPortal = require('../../utils/ConditionalPortal.js');
var styles = _interopDefault(require('./index.module.scss'));

var propTypes = {
  /**
   * Content that appears on top of the curtain. `children` is a [render
   * prop](https://reactjs.org/docs/render-props.html) and expects a function. The function
   * provided receives an object two properties:
   *
   * * `curtainClassName`: Handles positioning, z-index, opacity, overflow, and visibility.
   * Should be added to the `className` of the outermost element within the `children`.
   * * `curtainOnClick`: You can optionally add this prop to the `onClick` of an element within
   * `children`. This is typically used on to close a ModalCurtain when clicking on a dark
   * backdrop.
   *
   * The examples on this page include code samples that demonstrate real use of these props.
   */
  children: PropTypes.func,

  /**
   * The four states that a modal can be in.
   *
   * * `exited` – Modal is fully closed
   * * `entering` – Modal is opening
   * * `entered` – Modal has fully open
   * * `exiting` – Modal is closing
   *
   * Modals that do not have transitions will only use the `entered` and `exited` stages.
   */
  stage: PropTypes.oneOf(['entering', 'entered', 'exiting', 'exited']),

  /**
   * Accessibility title used to describe the content of the modal to screen readers.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Function that fires to close the modal.
   */
  onCloseClick: PropTypes.func.isRequired,

  /**
   * Determines if the modal should close when pressing the escape key.
   */
  shouldCloseOnEscape: PropTypes.bool
};
var defaultProps = {
  children: undefined,
  accessibilityLabel: 'Modal',
  stage: 'exited',
  shouldCloseOnEscape: true
};
function ModalCurtain(_ref) {
  var _classNames;

  var stage = _ref.stage,
      shouldCloseOnEscape = _ref.shouldCloseOnEscape,
      accessibilityLabel = _ref.accessibilityLabel,
      onCloseClick = _ref.onCloseClick,
      children = _ref.children;

  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      isClient = _useState2[0],
      setIsClient = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _rollupPluginBabelHelpers.slicedToArray(_useState3, 2),
      wrapperEl = _useState4[0],
      setWrapperEl = _useState4[1];

  React.useEffect(function () {
    setIsClient(true);
  }, []);
  var isEnteringOrEntered = stage === 'entering' || stage === 'entered';
  var shouldBindEscListener = isClient && shouldCloseOnEscape && isEnteringOrEntered;
  var shouldTrapFocus = isClient && wrapperEl && stage === 'entered';
  var shouldDisableScrolling = isEnteringOrEntered;
  useCloseOnEscape.default(onCloseClick, shouldBindEscListener);
  useFocusTrap.default(wrapperEl, shouldTrapFocus);
  return React__default.createElement(ConditionalPortal.default, {
    shouldDisplace: true
  }, React__default.createElement("div", {
    role: "dialog",
    "aria-label": accessibilityLabel,
    tabIndex: "-1",
    ref: function ref(element) {
      setWrapperEl(element);
    }
  }, shouldDisableScrolling && React__default.createElement(noScroll.default, null), children && children({
    curtainOnClick: function curtainOnClick(event) {
      // Ensures that the click event happened on the element that has the
      // `onClick`. This prevents clicks deep within `children` from bubbling
      // up and closing the ModalCurtain.
      if (event.target === event.currentTarget) {
        onCloseClick();
      }
    },
    curtainClassName: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.rootOpen, isEnteringOrEntered), _classNames))
  })));
}
ModalCurtain.propTypes = propTypes;
ModalCurtain.defaultProps = defaultProps;

exports.default = ModalCurtain;
//# sourceMappingURL=index.js.map
