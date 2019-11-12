import { inherits as _inherits, classCallCheck as _classCallCheck, possibleConstructorReturn as _possibleConstructorReturn, getPrototypeOf as _getPrototypeOf, createClass as _createClass } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './sticky-footer.module.scss';

/**
 * This component exists because `this.props.setSticky` updates state and React doesn't allow state
 * updates within `render`. The parent component (ModalDefaultFooter) receives `setSticky` within render
 * (with the Context API), so it's not possible to access the function within its lifecycle hooks.
 * https://blog.kentcdodds.com/answers-to-common-questions-about-render-props-a9f84bb12d5d#6a05
 */

var StickyFooter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StickyFooter, _React$Component);

  function StickyFooter() {
    _classCallCheck(this, StickyFooter);

    return _possibleConstructorReturn(this, _getPrototypeOf(StickyFooter).apply(this, arguments));
  }

  _createClass(StickyFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var setSticky = this.props.setSticky;
      setSticky(true);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement("div", {
        className: styles.root
      }, children);
    }
  }]);

  return StickyFooter;
}(React.Component);

StickyFooter.propTypes = {
  children: PropTypes.node.isRequired,
  setSticky: PropTypes.func
};
StickyFooter.defaultProps = {
  setSticky: undefined
};

export default StickyFooter;
//# sourceMappingURL=sticky-footer.js.map
