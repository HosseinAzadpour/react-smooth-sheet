import { useEffect } from "react";
import { BottomSheetShow } from "../functions/BottomSheetShow";
const useBottomSheetVisibility = ({
  isOpen,
  bottomSheetElement,
  overlayBlur,
}) => {
  useEffect(() => {
    if (isOpen) {
      BottomSheetShow(bottomSheetElement, overlayBlur);
    }
  }, [isOpen]);
};

export default useBottomSheetVisibility;
