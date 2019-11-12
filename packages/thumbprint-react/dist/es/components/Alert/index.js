import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames';
import '../../icons/content-actions-check-small.js';
import '../../icons/navigation-caret-down-small.js';
import '../../icons/navigation-close-tiny.js';
import '../../icons/navigation-close-small.js';
import '../../icons/navigation-close-medium.js';
import AlertCheck from '../../icons/alert-check.js';
import AlertInfo from '../../icons/alert-info.js';
import AlertWarning from '../../icons/alert-warning.js';
import styles from './index.module.scss';

function BannerAlert(_ref) {
  var _classNames;

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'info' : _ref$theme,
      dataTest = _ref.dataTest;
  return React.createElement("div", {
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.root, true), _defineProperty(_classNames, styles.banner, true), _defineProperty(_classNames, styles.good, theme === 'good'), _defineProperty(_classNames, styles.bad, theme === 'bad'), _defineProperty(_classNames, styles.warning, theme === 'warning'), _defineProperty(_classNames, styles.info, theme === 'info'), _classNames)),
    "data-test": dataTest
  }, React.createElement("div", {
    className: styles.text
  }, children));
}
var ALERT_ICONS = {
  good: React.createElement(AlertCheck, {
    className: styles.icon
  }),
  bad: React.createElement(AlertWarning, {
    className: styles.icon
  }),
  warning: React.createElement(AlertWarning, {
    className: styles.icon
  }),
  info: React.createElement(AlertInfo, {
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
  return React.createElement("div", {
    className: classNames((_classNames2 = {}, _defineProperty(_classNames2, styles.root, true), _defineProperty(_classNames2, styles.good, theme === 'good'), _defineProperty(_classNames2, styles.bad, theme === 'bad'), _defineProperty(_classNames2, styles.warning, theme === 'warning'), _defineProperty(_classNames2, styles.info, theme === 'info'), _classNames2)),
    "data-test": dataTest
  }, ALERT_ICONS[theme], React.createElement("div", {
    className: styles.text
  }, children));
}

export { BannerAlert, InPageAlert };
//# sourceMappingURL=index.js.map
