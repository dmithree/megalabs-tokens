/**
 * Given a DOM node, this function will find the element's scrollable parent.
 *
 * It is adapted from:
 * https://stackoverflow.com/a/42543908/316602
 */
function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRegex = /(auto|scroll)/;
  if (style.position === 'fixed') return document.body; // eslint-disable-next-line no-cond-assign

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
  }

  return document.body;
}

export default getScrollParent;
//# sourceMappingURL=get-scroll-parent.js.map
