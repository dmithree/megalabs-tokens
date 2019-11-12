import React from 'react';
import canUseDOM from './can-use-dom.js';
import ReactDOM from 'react-dom';

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

  return React.createElement(React.Fragment, null, canUseDOM && shouldDisplace ? ReactDOM.createPortal(children, document.body) : children);
}

export default ConditionalPortal;
//# sourceMappingURL=ConditionalPortal.js.map
