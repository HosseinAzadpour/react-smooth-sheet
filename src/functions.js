export function BottomSheetShow(bottomSheetElement, overlayBlur) {
  bottomSheetElement.current.style.display = "flex";
  bottomSheetElement.current.childNodes[1].style.transition = `0.5s`;
  setTimeout(() => {
    bottomSheetElement.current.childNodes[1].style.bottom = `0`;
    bottomSheetElement.current.style.webkitBackdropFilter = `blur(${
      overlayBlur != undefined ? overlayBlur : 2
    }px)`;
    bottomSheetElement.current.style.backdropFilter = `blur(${
      overlayBlur != undefined ? overlayBlur : 2
    }px)`;
    bottomSheetElement.current.style.opacity = "1";
    bottomSheetElement.current.style.transform = "translateY(0vh)";
  }, 200);
}
export function BottomSheetHide(bottomSheetElement, sendDataToParent) {
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
export function scrollBottomSheet(
  touchStart,
  touchMove,
  vh,
  bottomSheetElement
) {
  var bottomSheet = bottomSheetElement.current.childNodes[1];

  bottomSheet.style.transition = "0.01s";
  if (touchStart < touchMove) {
    // finger moving down
    touchMove > vh * 0.39
      ? (bottomSheet.style.bottom = `-${touchMove - touchStart}px`)
      : (bottomSheet.style.bottom = `0`);
  }
}
