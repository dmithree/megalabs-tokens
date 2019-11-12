'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var styles = _interopDefault(require('./index.module.scss'));

function BlockListItemLink(_ref) {
  var _classNames;

  var className = _ref.className,
      rest = _rollupPluginBabelHelpers.objectWithoutProperties(_ref, ["className"]);

  return (// eslint-disable-next-line jsx-a11y/anchor-has-content
    React__default.createElement("a", _rollupPluginBabelHelpers.extends({}, rest, {
      className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.itemLink, true), _rollupPluginBabelHelpers.defineProperty(_classNames, className, className !== undefined), _classNames))
    }))
  );
}
function BlockListItem(_ref2) {
  var children = _ref2.children;
  return React__default.createElement("div", {
    className: styles.item
  }, children);
}
function BlockList(_ref3) {
  var _classNames2;

  var children = _ref3.children,
      border = _ref3.border;
  return React__default.createElement("div", {
    className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.list, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.listBorderGroup, border === 'group'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.listBorderBottom, border === 'bottom'), _classNames2))
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

exports.BlockList = BlockList;
exports.BlockListItem = BlockListItem;
exports.BlockListItemLink = BlockListItemLink;
//# sourceMappingURL=index.js.map
