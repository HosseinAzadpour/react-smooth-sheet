"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSheetHide = BottomSheetHide;
function BottomSheetHide(bottomSheetElement, sendDataToParent) {
  bottomSheetElement.current.style.webkitBackdropFilter = "blur(0px)";
  bottomSheetElement.current.style.backdropFilter = "blur(0px)";
  bottomSheetElement.current.style.transform = "translateY(0vh)";
  bottomSheetElement.current.style.opacity = "0";
  bottomSheetElement.current.childNodes[1].style.transition = `0.5s`;
  bottomSheetElement.current.childNodes[1].style.bottom = `-40vh`;
  setTimeout(() => {
    bottomSheetElement.current.style.display = "none";
    sendDataToParent(false);
  }, 500);
}