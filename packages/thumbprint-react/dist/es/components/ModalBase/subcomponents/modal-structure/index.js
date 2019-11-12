import { inherits as _inherits, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf, assertThisInitialized as _assertThisInitialized, createClass as _createClass, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noScroll from 'no-scroll';
import FocusTrap from 'focus-trap-react';
import ModalContents from '../modal-contents/index.js';
import styles from './index.module.scss';

var ESC_KEY = 27;

var toggleScrolling = function toggleScrolling(isOpen) {
  if (isOpen) {
    noScroll.on();
  } else {
    noScroll.off();
  }
};

var ModalStructure =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalStructure, _React$Component);

  function ModalStructure(props) {
    var _this;

    _classCallCheck(this, ModalStructure);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalStructure).call(this, props));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.toggleKeyDownListener = _this.toggleKeyDownListener.bind(_assertThisInitialized(_this));
    _this.state = {
      keyDownListenerRegistered: false
    };
    var shouldAnimate = _this.props.shouldAnimate;
    /**
     * Duration of the modal's transition on open and close. This value is duplicated in the
     * Sass.
     */

    _this.TRANSITION_SPEED = shouldAnimate ? 500 : 0;
    return _this;
  }

  _createClass(ModalStructure, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          shouldCloseOnEscape = _this$props.shouldCloseOnEscape;
      this.toggleKeyDownListener(isOpen, shouldCloseOnEscape);

      if (isOpen) {
        // Only disable scrolling on `componentDidMount` if the modal should immediately open
        // once it is mounted. Turning off the scroll lock if it has never been enabled may
        // cause the page to jump.
        toggleScrolling(isOpen);
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          onOpenFinish = _this$props2.onOpenFinish,
          onCloseFinish = _this$props2.onCloseFinish,
          shouldCloseOnEscape = _this$props2.shouldCloseOnEscape; // Enable or disable the background scrolling if the `isOpen` prop has changed.

      if (isOpen !== nextProps.isOpen) {
        toggleScrolling(nextProps.isOpen); // Set timeouts that match out transition speed. This allows us to fire functions when
        // our transitions are complete and the modal is entirely opened or closed.

        if (nextProps.isOpen === true && onOpenFinish) {
          setTimeout(onOpenFinish, this.TRANSITION_SPEED);
        } else if (nextProps.isOpen === false && onCloseFinish) {
          setTimeout(onCloseFinish, this.TRANSITION_SPEED);
        }
      } // Add or remove the `ESC` key listener when `isOpen` or `shouldCloseOnEscape` changes.


      if (isOpen !== nextProps.isOpen || shouldCloseOnEscape !== nextProps.shouldCloseOnEscape) {
        this.toggleKeyDownListener(nextProps.isOpen, nextProps.shouldCloseOnEscape);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.toggleKeyDownListener(false, false);
      toggleScrolling(false);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      var onCloseClick = this.props.onCloseClick;

      if (event.keyCode === ESC_KEY) {
        event.preventDefault();
        onCloseClick(event);
      }
    }
    /**
     * Adds or removes an event listener for `keyDown`. This is used to close the modal on `ESC`.
     * @param {boolean} isOpen
     * @param {boolean} shouldCloseOnEscape
     */

  }, {
    key: "toggleKeyDownListener",
    value: function toggleKeyDownListener(isOpen, shouldCloseOnEscape) {
      var keyDownListenerRegistered = this.state.keyDownListenerRegistered;

      if (isOpen && shouldCloseOnEscape && !keyDownListenerRegistered) {
        document.addEventListener('keydown', this.handleKeyDown);
        this.setState({
          keyDownListenerRegistered: true
        });
      } else if (keyDownListenerRegistered) {
        document.removeEventListener('keydown', this.handleKeyDown);
        this.setState({
          keyDownListenerRegistered: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props3 = this.props,
          assistiveTitle = _this$props3.assistiveTitle,
          backdropPadding = _this$props3.backdropPadding,
          children = _this$props3.children,
          contentsMaxWidth = _this$props3.contentsMaxWidth,
          isOpen = _this$props3.isOpen,
          onCloseClick = _this$props3.onCloseClick,
          shouldAnimate = _this$props3.shouldAnimate,
          shouldCloseOnBackdropClick = _this$props3.shouldCloseOnBackdropClick;
      return React.createElement(FocusTrap, {
        active: isOpen
      }, React.createElement("div", {
        className: classNames(styles.modalStructureBackdrop, (_classnames = {}, _defineProperty(_classnames, styles.modalStructureBackdropOpen, isOpen), _defineProperty(_classnames, styles.modalStructureBackdropAnimated, shouldAnimate), _classnames)),
        style: {
          padding: backdropPadding
        }
      }, React.createElement(ModalContents, {
        contentsMaxWidth: contentsMaxWidth,
        onCloseClick: onCloseClick,
        disableOnClickOutside: !isOpen || !shouldCloseOnBackdropClick,
        isOpen: isOpen,
        shouldAnimate: shouldAnimate,
        role: "dialog",
        "aria-label": assistiveTitle
      }, children)));
    }
  }]);

  return ModalStructure;
}(React.Component);
ModalStructure.propTypes = {
  /**
   * Content that appears on top of the backdrop.
   */
  children: PropTypes.node,

  /**
   * Should the backdrop appear open.
   */
  isOpen: PropTypes.bool,

  /**
   * Accessibility title used to describe the content of the modal to screen readers.
   */
  assistiveTitle: PropTypes.string,

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
   * Animate when opening and closing the modal.
   */
  shouldAnimate: PropTypes.bool,

  /**
   * Determines if the modal should close when clicking on the backdrop, outside of the content.
   */
  shouldCloseOnBackdropClick: PropTypes.bool,

  /**
   * Determines if the modal should close when pressing the escape key.
   */
  shouldCloseOnEscape: PropTypes.bool,

  /**
   * Amount of space separating the contents from the backdrop.
   */
  backdropPadding: PropTypes.oneOf([0, '48px 20px']),

  /**
   * The max width of the container that wraps the contents of the modal.
   */
  contentsMaxWidth: PropTypes.string
};
ModalStructure.defaultProps = {
  children: undefined,
  isOpen: false,
  assistiveTitle: 'Modal',
  onOpenFinish: undefined,
  onCloseFinish: undefined,
  backdropPadding: '48px 20px',
  contentsMaxWidth: '100%',
  shouldAnimate: true,
  shouldCloseOnBackdropClick: true,
  shouldCloseOnEscape: true
};

export default ModalStructure;
//# sourceMappingURL=index.js.map
