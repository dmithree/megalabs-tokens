'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var ESC_KEY = 27;
var EVENT_NAME = 'keyup';
/**
 * React Hook to register a keyboard listener to run a function when the ESC key is pressed.
 *
 * @param {function} doClose Function to run when ESC key is pressed.
 * @param {boolean} isActive Whether or not the key listener does anything.
 */

function useCloseOnEscape(doClose) {
  var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  React.useEffect(function () {
    var handleKeyUp = function handleKeyUp(event) {
      if (isActive && event.keyCode === ESC_KEY) {
        event.preventDefault();
        doClose();
      }
    };

    document.addEventListener(EVENT_NAME, handleKeyUp);
    return function () {
      document.removeEventListener(EVENT_NAME, handleKeyUp);
    };
  }, [doClose, isActive]);
}

exports.default = useCloseOnEscape;
//# sourceMappingURL=use-close-on-escape.js.map
