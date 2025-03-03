"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./BottomSheet.css");
var _functions = require("./functions");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BottomSheet = _ref => {
  let {
    sendDataToParent = false,
    isOpen = false,
    children = "your Code",
    overlayDark = 0,
    overlayBlur = 2,
    backgroundColor = "lightGray"
  } = _ref;
  var [touchStart, setTouchStart] = (0, _react.useState)(0);
  var [touchMove, setTouchMove] = (0, _react.useState)(0);
  var [lastTouchMove, setLastTouchMove] = (0, _react.useState)(0);
  var [touchEnd, setTouchEnd] = (0, _react.useState)(0);
  var bottomSheetElement = (0, _react.useRef)();
  var emptinessElement = (0, _react.useRef)();
  var containerElement = (0, _react.useRef)();
  const vh = Math.round(window.innerHeight / (100 / 100));
  (0, _react.useEffect)(() => {
    const bottomSheetChild = bottomSheetElement.current.childNodes[1];
    //amount of the add room modal move to hide
    if (touchMove - touchStart > 0.35 * vh && lastTouchMove < touchMove) {
      (0, _functions.BottomSheetHide)(bottomSheetElement, sendDataToParent);
    } else if (isOpen) {
      (0, _functions.BottomSheetShow)(bottomSheetElement, overlayBlur);
      bottomSheetChild.style.bottom = `0`;
    }
    emptinessElement.current.style.opacity = overlayDark;
    bottomSheetElement.current.style.webkitBackdropFilter = `blur(${overlayBlur}px)`;
    bottomSheetElement.current.style.backdropFilter = `blur(${overlayBlur}px)`;
    setTouchStart(0);
    setTouchMove(0);
  }, [touchEnd]);
  (0, _react.useEffect)(() => {
    const dragableOffsetTop = document.getElementById("dragable").getBoundingClientRect().top;
    if (touchStart != 0 && dragableOffsetTop > touchStart) {
      bottomSheetElement.current.style.webkitBackdropFilter = `blur(${lastTouchMove < touchMove ? overlayBlur - overlayBlur * dragableOffsetTop / vh : vh / dragableOffsetTop / 2 * overlayBlur}px)`;
      bottomSheetElement.current.style.backdropFilter = `blur(${lastTouchMove < touchMove ? overlayBlur - overlayBlur * dragableOffsetTop / vh : vh / dragableOffsetTop / 2 * overlayBlur}px)`;
      emptinessElement.current.style.opacity = `${lastTouchMove < touchMove ? overlayDark - overlayDark * dragableOffsetTop / vh : vh / dragableOffsetTop / 2 * overlayDark}`;
    }
  }, [touchMove]);
  (0, _react.useEffect)(() => {
    if (isOpen != false) {
      (0, _functions.BottomSheetShow)(bottomSheetElement, overlayBlur);
    }
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: bottomSheetElement,
    className: "bottomSheet"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: `${overlayDark}`
    },
    className: "emptiness",
    onClick: () => {
      (0, _functions.BottomSheetHide)(bottomSheetElement, sendDataToParent);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      backgroundColor: `${backgroundColor}`
    },
    onTouchEnd: e => {
      e.target.localName == "section" && setTouchEnd(e.changedTouches[0].clientY);
    },
    onTouchStart: e => {
      e.target.localName == "section" && setTouchStart(e.changedTouches[0].clientY);
    },
    onTouchMove: e => {
      setLastTouchMove(touchMove);
      e.target.localName == "section" && setTouchMove(e.changedTouches[0].clientY);
      (0, _functions.scrollBottomSheet)(touchStart, touchMove, vh, bottomSheetElement);
    }
  }, /*#__PURE__*/_react.default.createElement("section", {
    id: "dragable",
    className: "dragable"
  }, /*#__PURE__*/_react.default.createElement("section", null)), /*#__PURE__*/_react.default.createElement("div", {
    ref: containerElement,
    className: "content-area"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, children))));
};
var _default = exports.default = BottomSheet;