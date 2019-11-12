import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

function Title(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className,
      headingLevel = _ref.headingLevel,
      dataTest = _ref.dataTest,
      id = _ref.id;
  var elementName = headingLevel ? "h".concat(headingLevel) : 'div';
  var props = {
    className: classNames(styles["title".concat(size)], className),
    'data-test': dataTest,
    id: id
  };
  return React.createElement(elementName, props, children);
}
function Text(_ref2) {
  var children = _ref2.children,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 1 : _ref2$size,
      className = _ref2.className,
      _ref2$elementName = _ref2.elementName,
      elementName = _ref2$elementName === void 0 ? 'p' : _ref2$elementName,
      dataTest = _ref2.dataTest;
  var props = {
    className: classNames(styles["text".concat(size)], className),
    'data-test': dataTest
  };
  return React.createElement(elementName, props, children);
}

export { Text, Title };
//# sourceMappingURL=index.js.map
