'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isString = _interopDefault(require('lodash/isString'));

/**
 * thumbtackDomainPattern should account for:
 * - http://*thumbtack.com
 * - https://*thumbtack.com
 * - //*thumbtack.com
 */

var thumbtackDomainPattern = /^(?:https?:)?\/\/(?:[a-zA-Z0-9-]+\.)*thumbtack\.com\//;
var rootRelativeUrlPattern = /^\//;
var hashUrlPattern = /^#/;
/**
 * Check if a URL is an internal (TT.com) link
 */

var isThumbtackUrl = function isThumbtackUrl(url) {
  return isString(url) && (thumbtackDomainPattern.test(url) || rootRelativeUrlPattern.test(url) || hashUrlPattern.test(url));
};

exports.default = isThumbtackUrl;
//# sourceMappingURL=is-thumbtack-url.js.map
