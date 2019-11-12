import { objectWithoutProperties as _objectWithoutProperties, slicedToArray as _slicedToArray, extends as _extends, objectSpread as _objectSpread, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { forwardRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import find from 'lodash/find';
import warning from 'warning';
import { useInView } from 'react-intersection-observer';
import getScrollParent from './get-scroll-parent.js';
import canUseDOM from '../../utils/can-use-dom.js';
import styles from './index.module.scss';

// Steps in rendering Image
//
// 1. Picture is rendered without src, srcSets, and with a padding-top placholder on the <img>
// based on the containerAspectRatio.
// 2. The "sizes" attr is calculated on initial render to determine width of image.
// 3. When lazyload is triggered the src and scrSet props are populated based on the sizes value.
// 4. The image is set to opacity:0 to start to prevent flash of alt text
// 5. The image onLoad and onError events remove padding-top placholder and sets opacity to 1.
// --------------------------------------------------------------------------------------------

var Image = forwardRef(function (props, outerRef) {
  var _classNames;

  var src = props.src,
      _props$sources = props.sources,
      sources = _props$sources === void 0 ? [] : _props$sources,
      height = props.height,
      containerAspectRatio = props.containerAspectRatio,
      _props$objectFit = props.objectFit,
      objectFit = _props$objectFit === void 0 ? 'cover' : _props$objectFit,
      _props$objectPosition = props.objectPosition,
      objectPosition = _props$objectPosition === void 0 ? 'center' : _props$objectPosition,
      _props$alt = props.alt,
      alt = _props$alt === void 0 ? '' : _props$alt,
      className = props.className,
      _props$forceEarlyRend = props.forceEarlyRender,
      forceEarlyRender = _props$forceEarlyRend === void 0 ? null : _props$forceEarlyRend,
      rest = _objectWithoutProperties(props, ["src", "sources", "height", "containerAspectRatio", "objectFit", "objectPosition", "alt", "className", "forceEarlyRender"]); // The outermost DOM node that this component references. We use `useState` instead of
  // `useRef` because callback refs allow us to add more than one `ref` to a DOM node.


  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      containerRef = _useState2[0],
      setContainerRef = _useState2[1]; // --------------------------------------------------------------------------------------------
  // Sizes
  // --------------------------------------------------------------------------------------------
  // Used by srcSet to determine which image in the list will be requested. This value has to be
  // calculated client-side because we don't know the viewport width.


  var computeSizes = function computeSizes() {
    return containerRef && containerRef.clientWidth ? "".concat(containerRef.clientWidth, "px") : '0px';
  }; // If `forceEarlyRender` is truthy use that value, otherwise use the computed width.


  var sizes = forceEarlyRender || computeSizes(); // --------------------------------------------------------------------------------------------
  // Lazy-loading: library setup and polyfill
  // --------------------------------------------------------------------------------------------
  // IntersectionObserver's `root` property identifies the element whose bounds are treated as
  // the bounding box of the viewport for this element. By default, it uses `window`. Instead
  // of using the default, we use the nearest scrollable parent. This is the same approach that
  // React Waypoint and lazysizes use. The React Waypoint README explains this concept well:
  // https://git.io/fj00H

  var parent = canUseDOM && containerRef ? getScrollParent(containerRef) : null;
  var root = parent && (parent.tagName === 'HTML' || parent.tagName === 'BODY') ? null : parent; // `shouldLoadImage` becomes `true` when the lazy-loading functionality decides that we should
  // load the image.

  var _useInView = useInView({
    root: root,
    rootMargin: '100px',
    triggerOnce: true
  }),
      _useInView2 = _slicedToArray(_useInView, 2),
      inViewRef = _useInView2[0],
      isInView = _useInView2[1];

  var _useState3 = useState(canUseDOM && typeof window.IntersectionObserver !== 'undefined'),
      _useState4 = _slicedToArray(_useState3, 2),
      browserSupportIntersectionObserver = _useState4[0],
      setBrowserSupportIntersectionObserver = _useState4[1]; // Loads the `IntersectionObserver` polyfill asynchronously on browsers that don't support it.


  if (canUseDOM && typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer').then(function () {
      setBrowserSupportIntersectionObserver(true);
    });
  } // If `forceEarlyRender` is truthy, bypass lazy loading and load the image.


  var shouldLoadImage = isInView || forceEarlyRender; // --------------------------------------------------------------------------------------------
  // Object Fit: polyfill and CSS styles
  // --------------------------------------------------------------------------------------------

  var objectFitProps = {};
  var shouldObjectFit = !!height;
  var shouldPolyfillObjectFit = canUseDOM && document.documentElement && document.documentElement.style && 'objectFit' in document.documentElement.style !== true;
  warning(!height && !containerAspectRatio || height && !containerAspectRatio || !height && containerAspectRatio, 'You can pass either a `height` or `containerAspectRatio` to the `Image` component, but not both.');
  useEffect(function () {
    // We polyfill `object-fit` for browsers that don't support it. We only do it if we're
    // using a `height` or `containerAspectRatio`. The `shouldLoadImage` variable ensures
    // that we don't try to polyfill the image before the `src` exists. This can happy
    // when we lazy-load.
    if (shouldObjectFit && containerRef && shouldLoadImage && shouldPolyfillObjectFit) {
      import('object-fit-images').then(function (_ref) {
        var ObjectFitImages = _ref.default;
        ObjectFitImages(containerRef.querySelector('img'));
      });
    }
  }, [shouldObjectFit, containerRef, shouldLoadImage, shouldPolyfillObjectFit]);

  if (shouldObjectFit) {
    objectFitProps.style = {
      objectFit: objectFit,
      objectPosition: objectPosition
    };

    if (shouldPolyfillObjectFit) {
      // Weird, but this is how the polyfill knows what to do with the image in IE.
      objectFitProps.style.fontFamily = "\"object-fit: ".concat(objectFit, "; object-position: ").concat(objectPosition, "\"");
    }
  } // --------------------------------------------------------------------------------------------
  // Image Aspect Ratio used for image placeholder
  // --------------------------------------------------------------------------------------------


  var aspectRatioBoxProps = {};

  if (containerAspectRatio) {
    // This ensures that lazy-loaded images don't cause the browser scroll to jump once the
    // image has loaded. It uses the following technique:
    // https://css-tricks.com/aspect-ratio-boxes/
    var h = 100000;
    var w = h * containerAspectRatio;
    aspectRatioBoxProps.style = {
      paddingTop: "".concat(h / w * 100, "%"),
      overflow: 'hidden',
      // Prevents alt text from taking up space before `src` is populated
      height: 0
    };
  } // --------------------------------------------------------------------------------------------
  // Sources and srcSets
  // --------------------------------------------------------------------------------------------
  // We separate `webp` from the `jpeg`/`png` so that we can apply the `imgTagSource` directly
  // onto the `img` tag. While this makes the code messier, it is needed to work around a bug in
  // Safari:
  // - https://bugs.webkit.org/show_bug.cgi?id=190031
  // - https://bugs.webkit.org/show_bug.cgi?id=177068


  var webpSource = find(sources, function (s) {
    return s.type === 'image/webp';
  });
  var imgTagSource = find(sources, function (s) {
    return s.type === 'image/jpeg' || s.type === 'image/png';
  }); // --------------------------------------------------------------------------------------------
  // Image load and error states
  // --------------------------------------------------------------------------------------------

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoaded = _useState6[0],
      setIsLoaded = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isError = _useState8[0],
      setIsError = _useState8[1];

  return React.createElement(React.Fragment, null, React.createElement("picture", _extends({}, rest, {
    className: classNames(styles.picture, className),
    ref: function ref(el) {
      // Using a callback `ref` on this `picture` allows us to have multiple `ref`s on one
      // element.
      setContainerRef(el); // We don't want to turn on the `react-intersection-observer` functionality until
      // the polyfill is done loading.

      if (browserSupportIntersectionObserver) {
        inViewRef(el);
      } // `outerRef` is the potential forwarded `ref` passed in from a consumer.
      // Not all refs are callable functions, so only try and call it if it is.


      if (typeof outerRef === 'function') {
        outerRef(el);
      }
    }
  }), webpSource && React.createElement("source", {
    type: webpSource.type // Only add this attribute if lazyload has been triggered.
    ,
    srcSet: shouldLoadImage ? webpSource.srcSet : undefined,
    sizes: sizes
  }), React.createElement("img", {
    // The order of `sizes`, `srcSet`, and `src` is important to work around a bug in
    // Safari. Once the bug is fixed, we should simplify this by using `src` on the
    // `img` tag and using `source` tags.
    sizes: sizes // Only add this attribute if lazyload has been triggered.
    ,
    srcSet: shouldLoadImage && imgTagSource ? imgTagSource.srcSet : undefined // Only add this attribute if lazyload has been triggered.
    ,
    src: shouldLoadImage ? src : undefined // Height is generally only used for full-width hero images.
    ,
    height: height,
    alt: alt // Adds object fit values if specified and adds/removes placeholder padding.
    // For SSR we want this to fire instantly.
    ,
    style: _objectSpread({}, shouldObjectFit ? objectFitProps.style : {}, isLoaded || isError || forceEarlyRender ? {} : aspectRatioBoxProps.style),
    onLoad: function onLoad() {
      setIsLoaded(true);
    },
    onError: function onError() {
      setIsError(true);
    },
    className: classNames((_classNames = {}, _defineProperty(_classNames, styles.imageStart, true), _defineProperty(_classNames, styles.imageEnd, isLoaded || isError || forceEarlyRender), _classNames))
  })), !forceEarlyRender && React.createElement("noscript", null, React.createElement("img", {
    src: src,
    alt: alt
  })));
}); // Needed because of the `forwardRef`.

Image.displayName = 'Image';

export default Image;
//# sourceMappingURL=index.js.map
