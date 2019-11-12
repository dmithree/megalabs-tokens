'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var canUseDom = require('./can-use-dom.js');
var ReactDOM = _interopDefault(require('react-dom'));

/**
 * Component to conditionally portal a component to the end of the `<body>` if a certain condition is
 * true. Also automatically guards against trying to use portals in SSR where `document` is not
 * defined.
 */
function ConditionalPortal(_ref) {
  var _ref$shouldDisplace = _ref.shouldDisplace,
      shouldDisplace = _ref$shouldDisplace === void 0 ? false : _ref$shouldDisplace,
      children = _ref.children;

  if (!children) {
    return null;
  }

  return React__default.createElement(React__default.Fragment, null, canUseDom.default && shouldDisplace ? ReactDOM.createPortal(children, document.body) : children);
}

exports.default = ConditionalPortal;
//# sourceMappingURL=ConditionalPortal.js.map
