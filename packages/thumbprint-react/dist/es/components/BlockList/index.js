import { objectWithoutProperties as _objectWithoutProperties, extends as _extends, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function BlockListItemLink(_ref) {
  var _classNames;

  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return (// eslint-disable-next-line jsx-a11y/anchor-has-content
    React.createElement("a", _extends({}, rest, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, styles.itemLink, true), _defineProperty(_classNames, className, className !== undefined), _classNames))
    }))
  );
}
function BlockListItem(_ref2) {
  var children = _ref2.children;
  return React.createElement("div", {
    className: styles.item
  }, children);
}
function BlockList(_ref3) {
  var _classNames2;

  var children = _ref3.children,
      border = _ref3.border;
  return React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.list, true), _defineProperty(_classNames2, styles.listBorderGroup, border === 'group'), _defineProperty(_classNames2, styles.listBorderBottom, border === 'bottom'), _classNames2))
  }, children);
}
BlockList.propTypes = {
  /**
   * Add a border to the bottom or surround the entire list.
   */
  border: PropTypes.oneOf(['bottom', 'group']),

  /**
   * The list items and any item links.
   */
  children: PropTypes.node.isRequired
};
BlockList.defaultProps = {
  border: undefined
};
BlockListItem.propTypes = {
  /**
   * The content of the list item.
   */
  children: PropTypes.node.isRequired
};
BlockListItemLink.propTypes = {
  /**
   * URL pointing to the item link destination.
   */
  href: PropTypes.string.isRequired,

  /**
   * Content of the link.
   */
  children: PropTypes.node.isRequired
};

export { BlockList, BlockListItem, BlockListItemLink };
//# sourceMappingURL=index.js.map
