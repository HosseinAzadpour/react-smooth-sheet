"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useBottomSheetBlur = _ref => {
  let {
    bottomSheetElement,
    emptinessElement,
    touchStart,
    touchMove,
    lastTouchMove,
    overlayBlur,
    overlayDark,
    vh
  } = _ref;
  (0, _react.useEffect)(() => {
    const dragableElement = document.getElementById("dragable");
    if (!dragableElement || !bottomSheetElement.current || !emptinessElement.current) return;
    const dragableOffsetTop = dragableElement.getBoundingClientRect().top;
    if (touchStart !== 0 && dragableOffsetTop > touchStart) {
      const blurValue = lastTouchMove < touchMove ? overlayBlur - overlayBlur * dragableOffsetTop / vh : vh / dragableOffsetTop / 2 * overlayBlur;
      const opacityValue = lastTouchMove < touchMove ? overlayDark - overlayDark * dragableOffsetTop / vh : vh / dragableOffsetTop / 2 * overlayDark;
      bottomSheetElement.current.style.webkitBackdropFilter = `blur(${blurValue}px)`;
      bottomSheetElement.current.style.backdropFilter = `blur(${blurValue}px)`;
      emptinessElement.current.style.opacity = `${opacityValue}`;
    }
  }, [touchMove]);
};
var _default = exports.default = useBottomSheetBlur;