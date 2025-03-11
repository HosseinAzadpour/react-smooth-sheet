"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _BottomSheetHide = require("../functions/BottomSheetHide");
var _BottomSheetShow = require("../functions/BottomSheetShow");
const useBottomSheetTouch = _ref => {
  let {
    bottomSheetElement,
    emptinessElement,
    touchStart,
    touchMove,
    lastTouchMove,
    isOpen,
    overlayBlur,
    overlayDark,
    vh,
    sendDataToParent,
    setTouchStart,
    setTouchMove,
    touchEnd
  } = _ref;
  (0, _react.useEffect)(() => {
    if (!bottomSheetElement.current) return;
    const bottomSheetChild = bottomSheetElement.current.childNodes[1];
    if (touchMove - touchStart > 0.35 * vh && lastTouchMove < touchMove) {
      (0, _BottomSheetHide.BottomSheetHide)(bottomSheetElement, sendDataToParent);
    } else if (isOpen) {
      (0, _BottomSheetShow.BottomSheetShow)(bottomSheetElement, overlayBlur);
      bottomSheetChild.style.bottom = `0`;
    }
    if (emptinessElement.current) {
      emptinessElement.current.style.opacity = overlayDark;
    }
    bottomSheetElement.current.style.webkitBackdropFilter = `blur(${overlayBlur}px)`;
    bottomSheetElement.current.style.backdropFilter = `blur(${overlayBlur}px)`;
    setTouchStart(0);
    setTouchMove(0);
  }, [touchEnd]);
};
var _default = exports.default = useBottomSheetTouch;