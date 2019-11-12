import { slicedToArray as _slicedToArray, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import NoScroll from './components/no-scroll.js';
import useCloseOnEscape from '../../utils/use-close-on-escape.js';
import useFocusTrap from '../../utils/use-focus-trap.js';
import ConditionalPortal from '../../utils/ConditionalPortal.js';
import styles from './index.module.scss';

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

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isClient = _useState2[0],
      setIsClient = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      wrapperEl = _useState4[0],
      setWrapperEl = _useState4[1];

  useEffect(function () {
    setIsClient(true);
  }, []);
  var isEnteringOrEntered = stage === 'entering' || stage === 'entered';
  var shouldBindEscListener = isClient && shouldCloseOnEscape && isEnteringOrEntered;
  var shouldTrapFocus = isClient && wrapperEl && stage === 'entered';
  var shouldDisableScrolling = isEnteringOrEntered;
  useCloseOnEscape(onCloseClick, shouldBindEscListener);
  useFocusTrap(wrapperEl, shouldTrapFocus);
  return React.createElement(ConditionalPortal, {
    shouldDisplace: true
  }, React.createElement("div", {
    role: "dialog",
    "aria-label": accessibilityLabel,
    tabIndex: "-1",
    ref: function ref(element) {
      setWrapperEl(element);
    }
  }, shouldDisableScrolling && React.createElement(NoScroll, null), children && children({
    curtainOnClick: function curtainOnClick(event) {
      // Ensures that the click event happened on the element that has the
      // `onClick`. This prevents clicks deep within `children` from bubbling
      // up and closing the ModalCurtain.
      if (event.target === event.currentTarget) {
        onCloseClick();
      }
    },
    curtainClassName: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.rootOpen, isEnteringOrEntered), _classNames))
  })));
}
ModalCurtain.propTypes = propTypes;
ModalCurtain.defaultProps = defaultProps;

export default ModalCurtain;
//# sourceMappingURL=index.js.map
