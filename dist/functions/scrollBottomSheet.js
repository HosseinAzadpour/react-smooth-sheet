"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollBottomSheet = scrollBottomSheet;
function scrollBottomSheet(touchStart, touchMove, vh, bottomSheetElement) {
  var bottomSheet = bottomSheetElement.current.childNodes[1];
  bottomSheet.style.transition = "0.01s";
  if (touchStart < touchMove) {
    // finger moving down
    touchMove > vh * 0.39 ? bottomSheet.style.bottom = `-${touchMove - touchStart}px` : bottomSheet.style.bottom = `0`;
  }
}