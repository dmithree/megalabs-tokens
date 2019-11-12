import { defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Image from '../Image/index.js';
import styles from './index.module.scss';

var ServiceCardImage = forwardRef(function (props, outerRef) {
  var url = props.url,
      src = props.src,
      sources = props.sources,
      alt = props.alt;
  return React.createElement(Image, {
    className: styles.image,
    sources: sources,
    containerAspectRatio: 8 / 5,
    src: url || src // `url` deprecated
    ,
    alt: alt,
    ref: outerRef
  });
}); // Needed because of the `forwardRef`.

ServiceCardImage.displayName = 'ServiceCardImage';

function ServiceCardTitle(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: styles.title,
    title: children
  }, children);
}

function ServiceCardDescription(_ref2) {
  var _classNames;

  var _ref2$iconColor = _ref2.iconColor,
      iconColor = _ref2$iconColor === void 0 ? 'blue' : _ref2$iconColor,
      icon = _ref2.icon,
      children = _ref2.children;
  return React.createElement("div", {
    className: classNames(styles.descriptionWrap, (_classNames = {}, _defineProperty(_classNames, styles.iconBlue, iconColor === 'blue'), _defineProperty(_classNames, styles.iconGreen, iconColor === 'green'), _classNames))
  }, icon, React.createElement("div", {
    className: styles.description
  }, children));
}

function ServiceCard(_ref3) {
  var url = _ref3.url,
      children = _ref3.children,
      onClick = _ref3.onClick,
      _ref3$shouldOpenInNew = _ref3.shouldOpenInNewTab,
      shouldOpenInNewTab = _ref3$shouldOpenInNew === void 0 ? false : _ref3$shouldOpenInNew;
  return React.createElement("a", {
    href: url,
    onClick: onClick,
    target: shouldOpenInNewTab ? '_blank' : '_self',
    className: styles.root
  }, children);
}

export default ServiceCard;
export { ServiceCardDescription, ServiceCardImage, ServiceCardTitle };
//# sourceMappingURL=index.js.map
