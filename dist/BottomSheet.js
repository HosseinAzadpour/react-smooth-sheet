"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles/BottomSheet.css");
var _useBottomSheetBlur = _interopRequireDefault(require("./hooks/useBottomSheetBlur"));
var _useBottomSheetTouch = _interopRequireDefault(require("./hooks/useBottomSheetTouch"));
var _useBottomSheetVisibility = _interopRequireDefault(require("./hooks/useBottomSheetVisibility"));
var _EmptySpace = _interopRequireDefault(require("./components/EmptySpace"));
var _Container = _interopRequireDefault(require("./components/Container"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  (0, _useBottomSheetTouch.default)({
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
  });
  (0, _useBottomSheetBlur.default)({
    bottomSheetElement,
    emptinessElement,
    touchStart,
    touchMove,
    lastTouchMove,
    overlayBlur,
    overlayDark,
    vh
  });
  (0, _useBottomSheetVisibility.default)({
    isOpen,
    bottomSheetElement,
    overlayBlur
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: bottomSheetElement,
    className: "bottomSheet"
  }, /*#__PURE__*/_react.default.createElement(_EmptySpace.default, {
    sendDataToParent: sendDataToParent,
    overlayDark: overlayDark,
    overlayBlur: overlayBlur,
    bottomSheetElement: bottomSheetElement,
    emptinessElement: emptinessElement
  }), /*#__PURE__*/_react.default.createElement(_Container.default, {
    children: children,
    backgroundColor: backgroundColor,
    bottomSheetElement: bottomSheetElement,
    containerElement: containerElement,
    setLastTouchMove: setLastTouchMove,
    setTouchEnd: setTouchEnd,
    setTouchMove: setTouchMove,
    touchMove: touchMove,
    setTouchStart: setTouchStart,
    touchStart: touchStart
  }));
};
var _default = exports.default = BottomSheet;