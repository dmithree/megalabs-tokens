'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _rollupPluginBabelHelpers = require('../../_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var React__default = _interopDefault(React);
var classNames = _interopDefault(require('classnames'));
require('../../icons/content-actions-check-small.js');
require('../../icons/navigation-caret-down-small.js');
require('../../icons/navigation-close-tiny.js');
require('../../icons/navigation-close-small.js');
require('../../icons/navigation-close-medium.js');
var alertCheck = require('../../icons/alert-check.js');
var alertInfo = require('../../icons/alert-info.js');
var alertWarning = require('../../icons/alert-warning.js');
var styles = _interopDefault(require('./index.module.scss'));

function BannerAlert(_ref) {
  var _classNames;

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'info' : _ref$theme,
      dataTest = _ref.dataTest;
  return React__default.createElement("div", {
    className: classNames((_classNames = {}, _rollupPluginBabelHelpers.defineProperty(_classNames, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.banner, true), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.good, theme === 'good'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.bad, theme === 'bad'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.warning, theme === 'warning'), _rollupPluginBabelHelpers.defineProperty(_classNames, styles.info, theme === 'info'), _classNames)),
    "data-test": dataTest
  }, React__default.createElement("div", {
    className: styles.text
  }, children));
}
var ALERT_ICONS = {
  good: React__default.createElement(alertCheck.default, {
    className: styles.icon
  }),
  bad: React__default.createElement(alertWarning.default, {
    className: styles.icon
  }),
  warning: React__default.createElement(alertWarning.default, {
    className: styles.icon
  }),
  info: React__default.createElement(alertInfo.default, {
    className: styles.icon
  })
};
function InPageAlert(_ref2) {
  var _classNames2;

  var _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? 'info' : _ref2$theme,
      dataTest = _ref2.dataTest;
  return React__default.createElement("div", {
    className: classNames((_classNames2 = {}, _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.root, true), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.good, theme === 'good'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.bad, theme === 'bad'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.warning, theme === 'warning'), _rollupPluginBabelHelpers.defineProperty(_classNames2, styles.info, theme === 'info'), _classNames2)),
    "data-test": dataTest
  }, ALERT_ICONS[theme], React__default.createElement("div", {
    className: styles.text
  }, children));
}

exports.BannerAlert = BannerAlert;
exports.InPageAlert = InPageAlert;
//# sourceMappingURL=index.js.map
