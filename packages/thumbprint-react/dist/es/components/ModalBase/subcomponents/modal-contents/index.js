import { inherits as _inherits, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf, assertThisInitialized as _assertThisInitialized, createClass as _createClass, defineProperty as _defineProperty } from '../../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import isFunction from 'lodash/isFunction';
import styles from './index.module.scss';

var ModalContents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalContents, _React$Component);

  function ModalContents(props) {
    var _this;

    _classCallCheck(this, ModalContents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalContents).call(this, props));
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalContents, [{
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      var onCloseClick = this.props.onCloseClick;

      if (isFunction(onCloseClick)) {
        onCloseClick(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames;

      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          shouldAnimate = _this$props.shouldAnimate,
          contentsMaxWidth = _this$props.contentsMaxWidth,
          children = _this$props.children;
      return React.createElement("div", {
        className: classNames(styles.modalContents, (_classnames = {}, _defineProperty(_classnames, styles.modalContentsOpen, isOpen), _defineProperty(_classnames, styles.modalContentsAnimated, shouldAnimate), _classnames)),
        style: {
          maxWidth: contentsMaxWidth
        }
      }, children);
    }
  }]);

  return ModalContents;
}(React.Component);

ModalContents.propTypes = {
  /**
   * Function that fires to close the modal.
   */
  onCloseClick: PropTypes.func,

  /**
   * Content inside the modal.
   */
  children: PropTypes.node,

  /**
   * The max width of the container that wraps the contents of the modal.
   */
  contentsMaxWidth: PropTypes.string.isRequired,

  /**
   * Used by `react-onclickoutside` to indicate if the modal should close
   * when clicking outside of it. If `true`, this prevents backdrop clicks
   * from closing the modal.
   */
  disableOnClickOutside: // eslint-disable-next-line react/no-unused-prop-types
  PropTypes.oneOfType([// This should be passed in as a boolean. `func` is also listed because
  // onClickOutside`'s HOC changes it to a function.
  PropTypes.bool, PropTypes.func]),

  /**
   * Should the modal contents be visible.
   */
  isOpen: PropTypes.bool,

  /**
   * Animate when opening and closing the modal.
   */
  shouldAnimate: PropTypes.bool
};
ModalContents.defaultProps = {
  onCloseClick: undefined,
  children: null,
  disableOnClickOutside: undefined,
  isOpen: false,
  shouldAnimate: true
};
var ModalContents$1 = onClickOutside(ModalContents);

export default ModalContents$1;
//# sourceMappingURL=index.js.map
