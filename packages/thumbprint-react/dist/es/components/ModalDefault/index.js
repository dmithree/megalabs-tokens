import { defineProperty as _defineProperty, inherits as _inherits, createClass as _createClass, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf, assertThisInitialized as _assertThisInitialized } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TextButton } from '../Button/index.js';
import '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import '../../icons/navigation-close-tiny.js';
import NavigationCloseSmall from '../../icons/navigation-close-small.js';
import '../../icons/navigation-close-medium.js';
import '../../icons/alert-check.js';
import '../../icons/alert-info.js';
import '../../icons/alert-warning.js';
import ReactDOM from 'react-dom';
import ModalCurtain from '../ModalCurtain/index.js';
import noop from 'lodash/noop';
import StickyFooter from './components/sticky-footer.js';
import Transition from './components/transition.js';
import styles from './index.module.scss';

var _React$createContext = React.createContext({
  stickyFooterContainerRef: null,
  setSticky: noop
}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer; // These values are duplicated in the Sass.


var TRANSITION_OPEN_SPEED = 300;
var TRANSITION_CLOSE_SPEED = 250;
/**
 * `ModalDefaultAnimatedWrapper` is an exported component that we export for developers that want access to
 * `ModalDefault` without padding and a close button. We export it as a named export instead of
 * creating a `hasNoPadding` prop partly to discourage the use of `ModalDefault` without padding.
 *
 * This component uses `ModalCurtain` and includes the backdrop, transition, and white modal
 * wrapper that is available at a few widths.
 */

var ModalDefaultAnimatedWrapper = function ModalDefaultAnimatedWrapper(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onCloseClick = _ref.onCloseClick,
      onCloseFinish = _ref.onCloseFinish,
      onOpenFinish = _ref.onOpenFinish,
      shouldCloseOnCurtainClick = _ref.shouldCloseOnCurtainClick,
      width = _ref.width,
      heightAboveSmall = _ref.heightAboveSmall,
      shouldPageScrollAboveSmall = _ref.shouldPageScrollAboveSmall;
  return React.createElement(Transition, {
    in: isOpen,
    timeout: {
      enter: TRANSITION_OPEN_SPEED,
      exit: TRANSITION_CLOSE_SPEED
    },
    onEntered: onOpenFinish,
    onExited: onCloseFinish
  }, function (transitionStage) {
    return React.createElement(ModalCurtain, {
      stage: transitionStage,
      onCloseClick: onCloseClick
    }, function (_ref2) {
      var _classNames, _classNames2, _classNames3;

      var curtainClassName = _ref2.curtainClassName,
          curtainOnClick = _ref2.curtainOnClick;
      return (// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        React.createElement("div", {
          className: classNames((_classNames = {}, _defineProperty(_classNames, curtainClassName, true), _defineProperty(_classNames, styles.curtain, true), _defineProperty(_classNames, styles.curtainOpen, isOpen), _classNames))
        }, React.createElement("div", {
          className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.curtainInner, true), _defineProperty(_classNames2, styles.curtainInnerShouldPageScrollAboveSmall, shouldPageScrollAboveSmall), _classNames2)),
          onClick: shouldCloseOnCurtainClick ? curtainOnClick : undefined,
          "data-test": "thumbprint-modal-curtain"
        }, React.createElement("div", {
          className: classNames((_classNames3 = {}, _defineProperty(_classNames3, styles.wrapper, true), _defineProperty(_classNames3, styles.wrapperOpen, isOpen), _defineProperty(_classNames3, styles.wrapperWide, width === 'wide'), _defineProperty(_classNames3, styles.wrapperNarrow, width === 'narrow'), _defineProperty(_classNames3, styles.wrapperMedium, width === 'medium'), _defineProperty(_classNames3, styles.wrapperHeightMedium, heightAboveSmall === 'medium'), _defineProperty(_classNames3, styles.wrapperHeightTall, heightAboveSmall === 'tall'), _defineProperty(_classNames3, styles.wrapperShouldPageScrollAboveSmall, shouldPageScrollAboveSmall), _classNames3)),
          "data-test": "thumbprint-modal-wrapper"
        }, React.createElement("div", {
          className: classNames(_defineProperty({}, styles.container, true)),
          "data-test": "thumbprint-modal-container"
        }, children))))
      );
    });
  });
};

ModalDefaultAnimatedWrapper.propTypes = {
  /**
   * Content that appears within the modal.
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
   * Determines if the modal should close when clicking on the curtain, outside of the `children`.
   */
  shouldCloseOnCurtainClick: PropTypes.bool,

  /**
   * Allows the page to scroll vertically at viewports larger than the small breakpoint. If
   * `false`, the modal will always be equal to or smaller than the viewport and the contents
   * of the modal will scroll, not the page itself.
   */
  shouldPageScrollAboveSmall: PropTypes.bool,

  /**
   * Should the modal appear open.
   */
  isOpen: PropTypes.bool,

  /**
   * Sets the max-width of the modal container.
   */
  width: PropTypes.oneOf(['narrow', 'medium', 'wide']),

  /**
   * Sets height of the modal container above small viewport.
   * If `auto` (default), the modal height will be determined by its content.
   * Otherwise, the modal height will be fixed at some constant px.
   */
  heightAboveSmall: PropTypes.oneOf(['auto', 'medium', 'tall'])
};
ModalDefaultAnimatedWrapper.defaultProps = {
  children: undefined,
  onOpenFinish: undefined,
  onCloseFinish: undefined,
  isOpen: false,
  shouldCloseOnCurtainClick: true,
  shouldPageScrollAboveSmall: true,
  width: 'medium',
  heightAboveSmall: 'auto'
};
var modalHeaderPropTypes = {
  /**
   * Content (usually a `ModalDefaultTitle` and `ModalDefaultDescription`) that appears at the top of the
   * modal.
   */
  children: PropTypes.node.isRequired
};
var modalTitlePropTypes = {
  /**
   * Text that describes the modal contents. It is intended for use within the `ModalDefaultHeader`.
   */
  children: PropTypes.string.isRequired
};
var modalDescriptionPropTypes = {
  /**
   * Text intended for use below a `ModalDefaultTitle` and within a `ModalDefaultHeader`.
   */
  children: PropTypes.node.isRequired
};
var modalContentPropTypes = {
  /**
   * Content (usually a form) that makes up the main part of the modal.
   */
  children: PropTypes.node.isRequired
};
var modalContentFullBleedPropTypes = {
  /**
   * Content (usually a form) that makes up the main part of the modal.
   */
  children: PropTypes.node.isRequired,

  /**
   * Allows the React `className` prop to be passed through to the rendered element.
   */
  className: PropTypes.string,

  /**
   * Allows the React `style` prop to be passed through to the rendered element.
   */
  style: PropTypes.shape()
};
var modalContentFullBleedDefaultProps = {
  className: '',
  style: {}
};
var modalFooterPropTypes = {
  /**
   * Content (ususally buttons) to render within the footer.
   */
  children: PropTypes.node.isRequired,

  /**
   * Attaches the footer to the bottom of the modal below the small breakpoint.
   */
  isSticky: PropTypes.bool
};
var modalFooterDefaultProps = {
  isSticky: false
};
var modalDefaultPropTypes = {
  /**
   * Content that appears within the modal.
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
   * Determines if the close button should be rendered. This is generally discouraged and should
   * be used carefully. If used, the contents passed into the modal must contain a focusable
   * element such as a link or button.
   */
  shouldHideCloseButton: PropTypes.bool,

  /**
   * Determines if the modal should close when clicking on the curtain, outside of the `children`.
   */
  shouldCloseOnCurtainClick: PropTypes.bool,

  /**
   * Should the modal appear open.
   */
  isOpen: PropTypes.bool,

  /**
   * Sets the max-width of the modal container.
   */
  width: PropTypes.oneOf(['narrow', 'medium', 'wide']),

  /**
   * Sets height of the modal container above small viewport.
   * If `auto` (default), the modal height will be determined by its content.
   * Otherwise, the modal height will be fixed at some constant px.
   */
  heightAboveSmall: PropTypes.oneOf(['auto', 'medium', 'tall'])
};
var modalDefaultDefaultProps = {
  children: undefined,
  onOpenFinish: undefined,
  onCloseFinish: undefined,
  isOpen: false,
  shouldHideCloseButton: false,
  shouldCloseOnCurtainClick: true,
  width: 'medium',
  heightAboveSmall: 'auto'
};

var ModalDefaultHeader = function ModalDefaultHeader(_ref3) {
  var children = _ref3.children;
  return React.createElement("div", {
    className: styles.modalHeader
  }, children);
};

ModalDefaultHeader.propTypes = modalHeaderPropTypes;

var ModalDefaultTitle = function ModalDefaultTitle(_ref4) {
  var children = _ref4.children;
  return React.createElement("div", {
    className: styles.modalTitle
  }, children);
};

ModalDefaultTitle.propTypes = modalTitlePropTypes;

var ModalDefaultDescription = function ModalDefaultDescription(_ref5) {
  var children = _ref5.children;
  return React.createElement("div", {
    className: styles.modalDescription
  }, children);
};

ModalDefaultDescription.propTypes = modalDescriptionPropTypes;

var ModalDefaultContent = function ModalDefaultContent(_ref6) {
  var children = _ref6.children;
  return React.createElement("div", {
    className: styles.modalContent
  }, children);
};

ModalDefaultContent.propTypes = modalContentPropTypes;

var ModalDefaultContentFullBleed = function ModalDefaultContentFullBleed(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      style = _ref7.style;
  return React.createElement("div", {
    className: classNames(className, styles.modalContentFullBleed),
    style: style
  }, children);
};

ModalDefaultContentFullBleed.propTypes = modalContentFullBleedPropTypes;
ModalDefaultContentFullBleed.defaultProps = modalContentFullBleedDefaultProps;

var ModalDefaultFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalDefaultFooter, _React$Component);

  function ModalDefaultFooter(props) {
    var _this;

    _classCallCheck(this, ModalDefaultFooter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalDefaultFooter).call(this, props));
    _this.state = {
      isClient: false
    };
    return _this;
  }

  _createClass(ModalDefaultFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isClient: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isClient = this.state.isClient;
      var _this$props = this.props,
          isSticky = _this$props.isSticky,
          children = _this$props.children;

      if (!isClient) {
        return null;
      }

      return React.createElement(Consumer, null, function (_ref8) {
        var stickyFooterContainerRef = _ref8.stickyFooterContainerRef,
            setSticky = _ref8.setSticky;

        // When `isSticky` is true, the `ModalDefaultFooter` must change it's position in the
        // DOM so that it is fixed at the bottom of the modal on small viewports. We
        // use React's Context API so that it is a property of the `ModalDefaultFooter`
        // component and not the `ModalDefault` API.
        //
        // `stickyFooterContainerRef` is the DOM element where the sticky footer will
        // render. `setSticky` is a function that updates the state in `ModalDefault`,
        // changing the CSS to make the contents scroll and the footer fixed at the
        // bottom.
        if (!isSticky) {
          return React.createElement("div", {
            className: styles.modalFooterFluid
          }, children);
        } // We have to create a separate component here because `setSticky` updates
        // state in `ModalDefault` and state updates are not allowed within `render`.
        // Moving it to a separate component allows us to call it within
        // `componentDidMount`.
        // https://blog.kentcdodds.com/answers-to-common-questions-about-render-props-a9f84bb12d5d#6a05


        return ReactDOM.createPortal(React.createElement(StickyFooter, {
          setSticky: setSticky
        }, children), stickyFooterContainerRef.current);
      });
    }
  }]);

  return ModalDefaultFooter;
}(React.Component);

ModalDefaultFooter.propTypes = modalFooterPropTypes;
ModalDefaultFooter.defaultProps = modalFooterDefaultProps;

var ModalDefault =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ModalDefault, _React$Component2);

  function ModalDefault(props) {
    var _this2;

    _classCallCheck(this, ModalDefault);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ModalDefault).call(this, props));
    _this2.stickyFooterContainerRef = React.createRef();
    _this2.state = {
      hasStickyFooter: false
    };
    _this2.setSticky = _this2.setSticky.bind(_assertThisInitialized(_this2));
    _this2.activeTimeout = null;
    return _this2;
  }

  _createClass(ModalDefault, [{
    key: "setSticky",
    value: function setSticky(newVal) {
      var hasStickyFooter = this.state.hasStickyFooter;

      if (newVal !== hasStickyFooter) {
        this.setState({
          hasStickyFooter: newVal
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames6;

      var _this$props2 = this.props,
          children = _this$props2.children,
          isOpen = _this$props2.isOpen,
          onCloseClick = _this$props2.onCloseClick,
          onCloseFinish = _this$props2.onCloseFinish,
          onOpenFinish = _this$props2.onOpenFinish,
          shouldCloseOnCurtainClick = _this$props2.shouldCloseOnCurtainClick,
          shouldHideCloseButton = _this$props2.shouldHideCloseButton,
          width = _this$props2.width,
          heightAboveSmall = _this$props2.heightAboveSmall;
      var hasStickyFooter = this.state.hasStickyFooter;
      return React.createElement(ModalDefaultAnimatedWrapper, {
        onCloseClick: onCloseClick,
        onOpenFinish: onOpenFinish,
        onCloseFinish: onCloseFinish,
        shouldCloseOnCurtainClick: shouldCloseOnCurtainClick,
        isOpen: isOpen,
        width: width,
        heightAboveSmall: heightAboveSmall // We allow the modal to grow taller than the page only if
        // there is no sticky footer. This means that the page can
        // scroll vertically when the modal contents are tall enough.
        // If we have a sticky footer, we prevent the modal from
        // getting taller than the viewport so that the footer can
        // always appear at the bottom. In this case, the inside
        // of the modal itself will scroll vertically as needed.
        ,
        shouldPageScrollAboveSmall: !hasStickyFooter
      }, React.createElement(Provider, {
        value: {
          stickyFooterContainerRef: this.stickyFooterContainerRef,
          setSticky: this.setSticky
        }
      }, React.createElement("div", {
        className: styles.contents
      }, React.createElement("div", {
        className: classNames(styles.contentsPadding, _defineProperty({}, styles.contentsPaddingNotSticky, !hasStickyFooter))
      }, children)), React.createElement("div", {
        ref: this.stickyFooterContainerRef
      }), React.createElement("div", {
        className: classNames((_classNames6 = {}, _defineProperty(_classNames6, styles.closeButton, true), _defineProperty(_classNames6, styles.closeButtonNotSticky, !hasStickyFooter), _classNames6))
      }, shouldHideCloseButton === false && React.createElement(TextButton, {
        accessibilityLabel: "Close modal",
        iconLeft: React.createElement(NavigationCloseSmall, {
          className: styles.closeButtonIcon
        }),
        onClick: onCloseClick,
        theme: "inherit"
      }))));
    }
  }]);

  return ModalDefault;
}(React.Component);

ModalDefault.propTypes = modalDefaultPropTypes;
ModalDefault.defaultProps = modalDefaultDefaultProps;

export default ModalDefault;
export { ModalDefaultAnimatedWrapper, ModalDefaultContent, ModalDefaultContentFullBleed, ModalDefaultDescription, ModalDefaultFooter, ModalDefaultHeader, ModalDefaultTitle };
//# sourceMappingURL=index.js.map
