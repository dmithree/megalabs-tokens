'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
var propTypes = {
  children: PropTypes.func.isRequired,
  in: PropTypes.bool.isRequired,
  timeout: PropTypes.shape({
    enter: PropTypes.number.isRequired,
    exit: PropTypes.number.isRequired
  }).isRequired,
  onEntered: PropTypes.func,
  onExited: PropTypes.func
};
var defaultProps = {
  onEntered: undefined,
  onExited: undefined
};

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _rollupPluginBabelHelpers.inherits(Transition, _React$Component);

  function Transition(props) {
    var _this;

    _rollupPluginBabelHelpers.classCallCheck(this, Transition);

    _this = _rollupPluginBabelHelpers.possibleConstructorReturn(this, _rollupPluginBabelHelpers.getPrototypeOf(Transition).call(this, props));
    _this.state = {
      stage: null
    };
    return _this;
  }

  _rollupPluginBabelHelpers.createClass(Transition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var inProp = this.props.in;
      this.setState({
        stage: inProp ? ENTERING : EXITED
      });
      this.onEntering = this.onEntering.bind(this);
      this.onEntered = this.onEntered.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
      this.clearExistingTimeout = this.clearExistingTimeout.bind(this);
      this.currentTimeout = null; // Call `onEntered` If the modal is immediately open when it mounts.

      if (inProp) {
        this.onEntered();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var inProp = this.props.in;

      if (prevProps.in !== inProp) {
        this.clearExistingTimeout();

        if (inProp) {
          this.onEntering();
        } else {
          this.onExiting();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearExistingTimeout();
    }
  }, {
    key: "onEntering",
    value: function onEntering() {
      var timeout = this.props.timeout;
      this.setState({
        stage: ENTERING
      });
      this.currentTimeout = setTimeout(this.onEntered, timeout.enter);
    }
  }, {
    key: "onEntered",
    value: function onEntered() {
      var onEntered = this.props.onEntered;
      this.setState({
        stage: ENTERED
      });

      if (onEntered) {
        onEntered();
      }
    }
  }, {
    key: "onExiting",
    value: function onExiting() {
      var timeout = this.props.timeout;
      this.setState({
        stage: EXITING
      });
      this.currentTimeout = setTimeout(this.onExited, timeout.exit);
    }
  }, {
    key: "onExited",
    value: function onExited() {
      var onExited = this.props.onExited;
      this.setState({
        stage: EXITED
      });

      if (onExited) {
        onExited();
      }
    }
  }, {
    key: "clearExistingTimeout",
    value: function clearExistingTimeout() {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var stage = this.state.stage;
      var children = this.props.children;

      if (!stage) {
        return null;
      }

      return children(stage);
    }
  }]);

  return Transition;
}(React__default.Component);

Transition.propTypes = propTypes;
Transition.defaultProps = defaultProps;

exports.default = Transition;
//# sourceMappingURL=transition.js.map
