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
