"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _BottomSheetShow = require("../functions/BottomSheetShow");
const useBottomSheetVisibility = _ref => {
  let {
    isOpen,
    bottomSheetElement,
    overlayBlur
  } = _ref;
  (0, _react.useEffect)(() => {
    if (isOpen) {
      (0, _BottomSheetShow.BottomSheetShow)(bottomSheetElement, overlayBlur);
    }
  }, [isOpen]);
};
var _default = exports.default = useBottomSheetVisibility;