"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../styles/BottomSheet.css");
var _BottomSheetHide = require("../functions/BottomSheetHide");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EmptySpace = _ref => {
  let {
    sendDataToParent,
    overlayDark,
    overlayBlur,
    bottomSheetElement,
    emptinessElement
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      opacity: `${overlayDark}`
    },
    ref: emptinessElement,
    className: "emptiness",
    onClick: () => {
      (0, _BottomSheetHide.BottomSheetHide)(bottomSheetElement, sendDataToParent);
    }
  });
};
var _default = exports.default = EmptySpace;