'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var createFocusTrap = _interopDefault(require('focus-trap'));

function toggleTrap(trap, isActive) {
  if (isActive) {
    trap.activate();
  } else {
    trap.deactivate();
  }
}
/**
 * React Hook for trapping the focus inside a particular DOM element. Useful for building modal
 * components.
 *
 * @param {HTMLElement} element The element to trap focus inside of
 * @param {boolean} isActive Whether or not to activate the trap
 */


function useFocusTrap(element, isActive) {
  var _useState = React.useState(),
      _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
      trap = _useState2[0],
      setTrap = _useState2[1];

  React.useEffect(function () {
    // If we've already created a trap, toggle it based on the isActive status
    if (trap) {
      toggleTrap(trap, isActive); // Otherwise, if there's no trap, but there is a valid element that needs to be trapped
    } else if (element) {
      // Create the trap and store a reference to it
      var newTrap = createFocusTrap(element, {
        clickOutsideDeactivates: true,
        // Set initial focus to the modal wrapper itself instead of focusing on the first
        // focusable element by default
        initialFocus: element
      });
      setTrap(newTrap); // And toggle it based on isActive status

      toggleTrap(newTrap, isActive);
    } // When the component unmounts, we deactivate the trap, if there is one


    return function () {
      if (trap) {
        trap.deactivate();
      }
    };
  }, [element, isActive, trap]);
}

exports.default = useFocusTrap;
//# sourceMappingURL=use-focus-trap.js.map
