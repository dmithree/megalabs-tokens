'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var onClickOutside = _interopDefault(require('react-onclickoutside'));
var isFunction = _interopDefault(require('lodash/isFunction'));
var styles = _interopDefault(require('./index.module.scss'));

var ModalContents =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(ModalContents, _React$Component);

  function ModalContents(props) {
    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, ModalContents);

    _this = _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(ModalContents).call(this, props));
    _this.handleClickOutside = _this.handleClickOutside.bind(_rollupPluginBabelHelpers.assertThisInitialized(_this));
    return _this;
  }

  _rollupPluginBabelHelpers.createClass(ModalContents, [{
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
      return React__default.createElement("div", {
        className: classNames(styles.modalContents, (_classnames = {}, _rollupPluginBabelHelpers.defineProperty(_classnames, styles.modalContentsOpen, isOpen), _rollupPluginBabelHelpers.defineProperty(_classnames, styles.modalContentsAnimated, shouldAnimate), _classnames)),
        style: {
          maxWidth: contentsMaxWidth
        }
      }, children);
    }
  }]);

  return ModalContents;
}(React__default.Component);

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

exports.default = ModalContents$1;
//# sourceMappingURL=index.js.map
