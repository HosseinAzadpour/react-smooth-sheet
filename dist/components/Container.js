"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/BottomSheet.css");
var _scrollBottomSheet = require("../functions/scrollBottomSheet");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = _ref => {
  let {
    children,
    backgroundColor,
    bottomSheetElement,
    containerElement,
    setLastTouchMove,
    setTouchEnd,
    setTouchMove,
    touchMove,
    setTouchStart,
    touchStart
  } = _ref;
  const vh = Math.round(window.innerHeight / (100 / 100));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container",
    style: {
      backgroundColor: `${backgroundColor != undefined ? backgroundColor : "lightGray"}`
    },
    onTouchEnd: e => {
      e.target.localName == "section" && setTouchEnd(e.changedTouches[0].clientY);
    },
    onTouchStart: e => {
      {
        e.target.localName === "section" && setTouchStart(e.changedTouches[0].clientY);
      }
    },
    onTouchMove: e => {
      setLastTouchMove(touchMove);
      e.target.localName == "section" && setTouchMove(e.changedTouches[0].clientY);
      (0, _scrollBottomSheet.scrollBottomSheet)(touchStart, touchMove, vh, bottomSheetElement);
    }
  }, /*#__PURE__*/_react.default.createElement("section", {
    id: "dragable",
    className: "dragable"
  }, /*#__PURE__*/_react.default.createElement("span", null)), /*#__PURE__*/_react.default.createElement("div", {
    ref: containerElement,
    className: "content-area"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, children)));
};
var _default = exports.default = Container;