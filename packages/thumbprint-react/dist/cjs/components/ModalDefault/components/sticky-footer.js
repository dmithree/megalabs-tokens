'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styles = _interopDefault(require('./sticky-footer.module.scss'));

/**
 * This component exists because `this.props.setSticky` updates state and React doesn't allow state
 * updates within `render`. The parent component (ModalDefaultFooter) receives `setSticky` within render
 * (with the Context API), so it's not possible to access the function within its lifecycle hooks.
 * https://blog.kentcdodds.com/answers-to-common-questions-about-render-props-a9f84bb12d5d#6a05
 */

var StickyFooter =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(StickyFooter, _React$Component);

  function StickyFooter() {
    _rollupPluginBabelHelpers.classCallCheck(this, StickyFooter);

    return _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(StickyFooter).apply(this, arguments));
  }

  _rollupPluginBabelHelpers.createClass(StickyFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var setSticky = this.props.setSticky;
      setSticky(true);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React__default.createElement("div", {
        className: styles.root
      }, children);
    }
  }]);

  return StickyFooter;
}(React__default.Component);

StickyFooter.propTypes = {
  children: PropTypes.node.isRequired,
  setSticky: PropTypes.func
};
StickyFooter.defaultProps = {
  setSticky: undefined
};

exports.default = StickyFooter;
//# sourceMappingURL=sticky-footer.js.map
