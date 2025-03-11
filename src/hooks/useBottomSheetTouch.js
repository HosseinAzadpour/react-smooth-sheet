import { useEffect } from "react";
import { BottomSheetHide } from "../functions/BottomSheetHide";
import { BottomSheetShow } from "../functions/BottomSheetShow";
const useBottomSheetTouch = ({
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
  touchEnd,
}) => {
  useEffect(() => {
    if (!bottomSheetElement.current) return;

    const bottomSheetChild = bottomSheetElement.current.childNodes[1];

    if (touchMove - touchStart > 0.35 * vh && lastTouchMove < touchMove) {
      BottomSheetHide(bottomSheetElement, sendDataToParent);
    } else if (isOpen) {
      BottomSheetShow(bottomSheetElement, overlayBlur);
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

export default useBottomSheetTouch;
